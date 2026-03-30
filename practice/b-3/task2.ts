/*
Task 2 — Round-trip encoding:
Create a Buffer from the string "Node.js is great 🚀". Log the raw buffer (you'll see the byte values).
Then call .toString() and verify you get the original string back.
Now try using StringDecoder to decode it instead — confirm same result.
*/

import { StringDecoder } from "string_decoder";

const str = "Node.js is great 🚀";
const buf = Buffer.from(str);
console.log("Raw buffer:", buf);
console.log("Buffer toString():", buf.toString());

const decoder = new StringDecoder("utf8");
console.log("StringDecoder:", decoder.write(buf));
