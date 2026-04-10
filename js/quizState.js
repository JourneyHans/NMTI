import {
  buildSessionQuestions,
  TYPES,
  AXIS_PRIORITY,
  QUESTION_POOL,
  QUESTION_POOL_HYPERTENSION,
  MODE_STANDARD,
  MODE_HYPERTENSION,
  UNLOCK_STORAGE_KEY,
} from "./config.js";

function emptyScores() {
  return {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 },
  };
}

function readHypertensionUnlocked() {
  try {
    return localStorage.getItem(UNLOCK_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function writeStandardComplete() {
  try {
    localStorage.setItem(UNLOCK_STORAGE_KEY, "1");
  } catch (_) {
    /* ignore quota / private mode */
  }
}

/**
 * 按轴取分高的一侧；平局时取 AXIS_PRIORITY 中靠前字母（见 config 注释）。
 */
export function deriveCode(scores) {
  const pick = (axisKey) => {
    const [first, second] = AXIS_PRIORITY[axisKey];
    const a = scores[axisKey][first];
    const b = scores[axisKey][second];
    return a >= b ? first : second;
  };
  return `${pick("EI")}${pick("SN")}${pick("TF")}${pick("JP")}`;
}

export function createQuizState(bus) {
  let phase = "welcome";
  let index = 0;
  let scores = emptyScores();
  /** @type {{ axis: string, letter: string }[]} */
  let history = [];
  /** @type {Array<{ axis: string, prompt: string, choices: { text: string, letter: string }[] }>} */
  let sessionQuestions = [];
  let sessionMode = MODE_STANDARD;

  const notify = () => bus.emit("quiz/changed");

  bus.on("quiz/start", (payload = {}) => {
    const mode =
      payload.mode === MODE_HYPERTENSION ? MODE_HYPERTENSION : MODE_STANDARD;
    if (mode === MODE_HYPERTENSION && !readHypertensionUnlocked()) {
      return;
    }
    phase = "quiz";
    index = 0;
    scores = emptyScores();
    history = [];
    sessionMode = mode;
    const pool =
      mode === MODE_HYPERTENSION ? QUESTION_POOL_HYPERTENSION : QUESTION_POOL;
    sessionQuestions = buildSessionQuestions(pool);
    notify();
  });

  bus.on("quiz/answer", ({ letter }) => {
    if (phase !== "quiz") return;
    const q = sessionQuestions[index];
    if (!q || !(letter in scores[q.axis])) return;
    scores[q.axis][letter] += 1;
    history.push({ axis: q.axis, letter });
    index += 1;
    if (index >= sessionQuestions.length) {
      phase = "result";
      if (sessionMode === MODE_STANDARD) {
        writeStandardComplete();
      }
    }
    notify();
  });

  bus.on("quiz/prev", () => {
    if (phase === "quiz" && index > 0) {
      index -= 1;
      const last = history.pop();
      if (last) {
        scores[last.axis][last.letter] -= 1;
      }
      notify();
    } else if (phase === "quiz" && index === 0) {
      phase = "welcome";
      scores = emptyScores();
      history = [];
      sessionQuestions = [];
      sessionMode = MODE_STANDARD;
      notify();
    }
  });

  bus.on("quiz/reset", () => {
    phase = "welcome";
    index = 0;
    scores = emptyScores();
    history = [];
    sessionQuestions = [];
    sessionMode = MODE_STANDARD;
    notify();
  });

  function getSnapshot() {
    const hypertensionUnlocked = readHypertensionUnlocked();
    const base = {
      phase,
      index,
      scores,
      sessionQuestions,
      mode: sessionMode,
      hypertensionUnlocked,
    };
    if (phase !== "result") {
      return { ...base, code: null, typeInfo: null };
    }
    const code = deriveCode(scores);
    const typeInfo = TYPES[code] ?? {
      name: "未知型",
      tagline: "配置里还没收录这个组合，请改 config.js。",
      tips: [],
      hypertensionRoast: "",
    };
    return { ...base, code, typeInfo };
  }

  return { getSnapshot };
}
