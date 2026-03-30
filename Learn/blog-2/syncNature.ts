import { EventEmitter } from "events";

const emitter = new EventEmitter();
let count = 0;
const maxCycles = 5; // Limit the number of cycles

emitter.on("event1", () => {
  if (count++ >= maxCycles) return;
  console.log("Event 1");
  emitter.emit("event2");
});

emitter.on("event2", () => {
  if (count++ >= maxCycles) return;
  console.log("Event 2");
  emitter.emit("event3");
});

emitter.on("event3", () => {
  if (count++ >= maxCycles) return;
  console.log("Event 3");
  emitter.emit("event1");
});

emitter.emit("event1");
