const CHOICE_PREFIXES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function mountUi(bus, meta, getSnapshot) {
  const $ = (id) => document.getElementById(id);

  const screenWelcome = $("screen-welcome");
  const screenQuiz = $("screen-quiz");
  const screenResult = $("screen-result");
  const metaSiteName = $("meta-site-name");
  const metaTagline = $("meta-tagline");
  const welcomeDesc = $("welcome-desc");
  const progressBar = $("quiz-progress-bar");
  const progressText = $("quiz-progress-text");
  const quizPrompt = $("quiz-prompt");
  const quizChoices = $("quiz-choices");
  const resultCode = $("result-code");
  const resultName = $("result-name");
  const resultTagline = $("result-tagline");
  const resultTips = $("result-tips");
  const btnStart = $("btn-start");
  const btnPrev = $("btn-prev");
  const btnReset = $("btn-reset");

  metaSiteName.textContent = meta.siteName;
  metaTagline.textContent = meta.tagline;
  welcomeDesc.textContent = meta.welcomeHtml;

  btnStart.addEventListener("click", () => bus.emit("quiz/start"));
  btnPrev.addEventListener("click", () => bus.emit("quiz/prev"));
  btnReset.addEventListener("click", () => bus.emit("quiz/reset"));

  function setScreen(name) {
    screenWelcome.classList.toggle("is-hidden", name !== "welcome");
    screenQuiz.classList.toggle("is-hidden", name !== "quiz");
    screenResult.classList.toggle("is-hidden", name !== "result");
  }

  function resetChoiceUiState() {
    const active = document.activeElement;
    if (active instanceof HTMLElement && quizChoices.contains(active)) {
      active.blur();
    }
  }

  function renderQuiz(snap) {
    const questions = snap.sessionQuestions;
    const q = questions[snap.index];
    if (!q) return;

    const total = questions.length;
    const n = snap.index + 1;
    progressText.textContent = `第 ${n} / ${total} 题`;
    progressBar.style.width = `${(n / total) * 100}%`;
    quizPrompt.textContent = q.prompt;

    resetChoiceUiState();
    quizChoices.replaceChildren();

    q.choices.forEach((c, i) => {
      const prefix = CHOICE_PREFIXES[i] ?? String(i + 1);
      const b = document.createElement("button");
      b.type = "button";
      b.className = "btn btn-choice";
      b.textContent = `${prefix}. ${c.text}`;
      b.addEventListener("click", () => {
        b.blur();
        bus.emit("quiz/answer", { letter: c.letter });
      });
      quizChoices.appendChild(b);
    });

    requestAnimationFrame(() => {
      quizPrompt.focus({ preventScroll: true });
    });
  }

  function renderResult(snap) {
    resultCode.textContent = snap.code;
    resultName.textContent = snap.typeInfo.name;
    resultTagline.textContent = snap.typeInfo.tagline;
    const tips = snap.typeInfo.tips ?? [];
    if (tips.length > 0) {
      resultTips.hidden = false;
      resultTips.replaceChildren();
      tips.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        resultTips.appendChild(li);
      });
    } else {
      resultTips.hidden = true;
      resultTips.replaceChildren();
    }
  }

  function render() {
    const snap = getSnapshot();

    if (snap.phase === "welcome") {
      setScreen("welcome");
      return;
    }

    if (snap.phase === "quiz") {
      setScreen("quiz");
      renderQuiz(snap);
      return;
    }

    if (snap.phase === "result") {
      setScreen("result");
      renderResult(snap);
    }
  }

  bus.on("quiz/changed", render);
}
