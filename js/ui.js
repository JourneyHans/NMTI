import { QUESTIONS } from "./config.js";

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

  function renderQuiz(index) {
    const q = QUESTIONS[index];
    const n = index + 1;
    progressText.textContent = `第 ${n} / ${QUESTIONS.length} 题`;
    progressBar.style.width = `${(n / QUESTIONS.length) * 100}%`;
    quizPrompt.textContent = q.prompt;
    quizChoices.replaceChildren();
    q.choices.forEach((c) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "btn btn-choice";
      b.textContent = c.text;
      b.addEventListener("click", () => bus.emit("quiz/answer", { letter: c.letter }));
      quizChoices.appendChild(b);
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
      renderQuiz(snap.index);
      return;
    }

    if (snap.phase === "result") {
      setScreen("result");
      renderResult(snap);
    }
  }

  bus.on("quiz/changed", render);
}
