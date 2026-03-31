import { request } from "https";
import { createWriteStream } from "node:fs";

/**
 * Task 2 — Save API response to file (Promise-based):
 * This function returns a Promise that resolves when the piping is completed.
 */

function saveApiToFile(urlPath: string, fileName: string): Promise<void> {
    return new Promise((resolve, reject) => {
        // Create the writable file stream
        const writable = createWriteStream(fileName);

        const options = {
            host: 'jsonplaceholder.typicode.com',
            path: urlPath,
            method: 'GET',
        };

        const req = request(options, (res) => {
            console.log(`🚀 Starting stream download from ${urlPath} to ${fileName}...`);

            // Use pipe to handle the streaming data flow
            res.pipe(writable);

            // Success Case: Resolve ONLY when the file is fully "finished"
            writable.on("finish", () => {
                writable.close();
                resolve();
            });

            // Error Case: Catch stream issues
            res.on("error", (err) => {
                writable.close();
                reject(new Error(`Read stream error: ${err.message}`));
            });
        });

        // Error Case: Catch network/DNS/Request issues
        req.on("error", (err) => {
            writable.close();
            reject(new Error(`Request error: ${err.message}`));
        });

        // Error Case: Catch file system issues
        writable.on("error", (err) => {
            writable.close();
            reject(new Error(`File system error: ${err.message}`));
        });

        req.end();
    });
}

// --- Using the Promise ---

saveApiToFile('/posts', './posts.json')
    .then(() => {
        console.log("✅ Saved! The complete response is now in posts.json");
    })
    .catch((err) => {
        console.error("❌ Fatal Error:", err.message);
    });