import { EventEmitter } from "events";

const emitter = new EventEmitter();
const one = function one() {
  console.log("one");
};

emitter.on("event1", one);

emitter.emit("event1");

emitter.removeListener("event1", one);

emitter.emit("event1");
