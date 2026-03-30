/*
Build a simple logger:
Create an EventEmitter that emits a `log` event with a message string.
Register two listeners — one that prints the message normally, one that prints it in uppercase.
Emit a few different messages and observe both listeners firing.
*/

import { EventEmitter } from "events";

const logger = new EventEmitter();

logger.on("log", (message) => {
  console.log(message);
});

logger.on("log", (message) => {
  console.log(message.toUpperCase());
});

logger.emit("log", "Hello, world!");
logger.emit("log", "This is a log message.");
