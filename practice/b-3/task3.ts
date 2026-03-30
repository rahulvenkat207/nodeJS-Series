/*
Task 3 — Chunked decoding:
Create an array of 3–4 Buffers that together spell out a sentence containing an emoji.
Use StringDecoder to decode them chunk by chunk and build the final string.
Then try the same with plain .toString() on each chunk and compare the broken output to the correct one.
*/

import { StringDecoder } from "string_decoder";

const sentence = "Hello, world 🚀!";
const fullBuffer = Buffer.from(sentence);
// Split buffer into chunks (simulate streaming)
const chunks = [
  fullBuffer.slice(0, 7), // 'Hello, '
  fullBuffer.slice(7, 13), // 'world '
  fullBuffer.slice(13), // '🚀!'
];

const decoder = new StringDecoder("utf8");
let decoded = "";
console.log("Decoding with StringDecoder:");
for (const chunk of chunks) {
  decoded += decoder.write(chunk);
}
console.log("Result:", decoded);

console.log("\nDecoding with Buffer.toString():");
for (const chunk of chunks) {
  console.log(chunk.toString());
}
