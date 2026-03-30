/*
Create an EventEmitter with a listener attached to an
 `order` event. After it fires 3 times, use `removeListener`
  to unsubscribe it. Emit the event 5 times and confirm it only 
  logs 3 times. 

*/
import { EventEmitter } from "events";

const orderEmitter = new EventEmitter();

function orderListener() {
  console.log("Order received!");
}

orderEmitter.on("order", orderListener);

orderEmitter.emit("order");
orderEmitter.emit("order");
orderEmitter.emit("order");

orderEmitter.removeListener("order", orderListener);

orderEmitter.emit("order");
orderEmitter.emit("order");
