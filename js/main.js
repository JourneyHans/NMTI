import { META } from "./config.js";
import { createEventBus } from "./eventBus.js";
import { createQuizState } from "./quizState.js";
import { mountUi } from "./ui.js";

const bus = createEventBus();
const { getSnapshot } = createQuizState(bus);
mountUi(bus, META, getSnapshot);
bus.emit("quiz/changed");
