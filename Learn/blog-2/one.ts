import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("event", function one() {
  console.log("One");
});
emitter.on("event", function two() {
  console.log("Two");
});
emitter.on("event", function three() {
  console.log("Three");
});

// Use emitter.once for one-time event listener
// Example: emitter.once("event", function() { ... });

emitter.emit("event");
