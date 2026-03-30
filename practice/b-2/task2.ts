/*
One-time welcome message:** Create an EventEmitter that emits a `userConnected` event.
Use `.once()` to print "Welcome! Setting up your session..." only on the first connection.
 Use `.on()` to print "User connected" for every connection. 
 Emit the event 3 times and check the output.
*/

import { EventEmitter } from "events";

const userEmitter = new EventEmitter();

userEmitter.once("userConnected", () => {
  console.log("Welcome! Setting up your session...");
});

userEmitter.on("userConnected", () => {
  console.log("User connected");
});

userEmitter.emit("userConnected");
userEmitter.emit("userConnected");
userEmitter.emit("userConnected");
