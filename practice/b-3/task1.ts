/*
Task 1 — Overflow explorer:
Create a Buffer.alloc(4). Assign these values to its slots: 255, 256, 300, -1.
Log each slot and manually verify the output using the % 256 rule. Try to predict the output before running it.
*/

const buf = Buffer.alloc(4);
buf[0] = 255;
buf[1] = 256;
buf[2] = 300;
buf[3] = -1;

console.log("Buffer values:");
for (let i = 0; i < buf.length; i++) {
  console.log(`buf[${i}] = ${buf[i]}`);
}
// Expected: 255, 0, 44, 255 (because of % 256)
