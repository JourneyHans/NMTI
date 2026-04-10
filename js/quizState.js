import { QUESTIONS, TYPES, AXIS_PRIORITY } from "./config.js";

function emptyScores() {
  return {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 },
  };
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

  const notify = () => bus.emit("quiz/changed");

  bus.on("quiz/start", () => {
    phase = "quiz";
    index = 0;
    scores = emptyScores();
    history = [];
    notify();
  });

  bus.on("quiz/answer", ({ letter }) => {
    if (phase !== "quiz") return;
    const q = QUESTIONS[index];
    if (!q || !(letter in scores[q.axis])) return;
    scores[q.axis][letter] += 1;
    history.push({ axis: q.axis, letter });
    index += 1;
    if (index >= QUESTIONS.length) {
      phase = "result";
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
      notify();
    }
  });

  bus.on("quiz/reset", () => {
    phase = "welcome";
    index = 0;
    scores = emptyScores();
    history = [];
    notify();
  });

  function getSnapshot() {
    const base = { phase, index, scores };
    if (phase !== "result") {
      return { ...base, code: null, typeInfo: null };
    }
    const code = deriveCode(scores);
    const typeInfo = TYPES[code] ?? {
      name: "未知型",
      tagline: "配置里还没收录这个组合，请改 config.js。",
      tips: [],
    };
    return { ...base, code, typeInfo };
  }

  return { getSnapshot };
}
