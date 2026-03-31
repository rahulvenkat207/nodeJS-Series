import { createReadStream, createWriteStream } from 'node:fs';

/**
 * Task 1 — File copier with progress:
 * Use createReadStream and createWriteStream with .pipe() to copy a large text file.
 * Add a data listener on the readable side to count how many chunks were processed.
 * Log the total chunk count when finish fires on the writable.
 */

const srcFile = './file.txt';
const destFile = './copy.txt';

const readable = createReadStream(srcFile);
const writable = createWriteStream(destFile);

let chunkCount = 0;

// Track progress on the readable side
readable.on('data', () => {
    chunkCount++;
});

// Use pipe to handle the data flow
readable.pipe(writable);

// Log final progress on the writable's finish event
writable.on('finish', () => {
    console.log(`\n✅ Copy completed successfully.`);
    console.log(`📂 Source: ${srcFile}`);
    console.log(`📂 Destination: ${destFile}`);
    console.log(`📊 Total Chunks Processed: ${chunkCount}`);
});

writable.on('error', (err) => {
    console.error('Error during write operation:', err.message);
});

readable.on('error', (err) => {
    console.error('Error during read operation:', err.message);
});
