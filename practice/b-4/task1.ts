import { createReadStream } from "node:fs";

// Change this to "./small_file.txt" to see the difference
const filePath = "./file.txt"; 
const stream = createReadStream(filePath, "utf-8");

let chunkCount = 0;
let totalChars = 0;

stream.on("data", (chunk) => {
    chunkCount++;
    totalChars += chunk.length;
    console.log(`[Chunk ${chunkCount}] Arrived with length: ${chunk.length}`);
});

stream.on("end", () => {
    console.log("\n--- Final Statistics ---");
    console.log(`File: ${filePath}`);
    console.log(`Total Chunks: ${chunkCount}`);
    console.log(`Total Characters: ${totalChars}`);
    console.log("------------------------\n");
});

stream.on("error", (err) => {
    console.error("Stream Error:", err.message);
});