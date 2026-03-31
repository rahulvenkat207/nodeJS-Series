import { request } from "https";
import { IncomingHttpHeaders, RequestOptions } from "node:http";

/**
 * Task 1 — Promise-based GET client:
 * Use the performRequest wrapper to fetch data from jsonplaceholder.typicode.com/posts.
 * Parse the response, count how many posts there are, and log the titles of the first 5.
 */

interface Response {
    data: any;
    headers: IncomingHttpHeaders;
}

function performRequest(options: RequestOptions): Promise<Response> {
    return new Promise((resolve, reject) => {
        const req = request(options, (response) => {
            const { headers } = response;
            let data = '';

            response.on("data", (chunk) => data += chunk);

            response.on("end", () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve({
                        data: parsedData,
                        headers
                    });
                } catch (err) {
                    reject(new Error("Failed to parse JSON response"));
                }
            });
        });

        // Handle network errors
        req.on("error", (err) => {
            reject(err);
        });

        // Send the request
        req.end();
    });
}

const options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET',
};

performRequest(options)
    .then((response) => {
        const posts = response.data;
        console.log(`✅ Success! Total posts found: ${posts.length}`);
        
        console.log("\n--- Titles of the first 5 posts ---");
        posts.slice(0, 5).forEach((post: any, index: number) => {
            console.log(`${index + 1}: ${post.title}`);
        });
    })
    .catch((err) => {
        console.error("❌ Error encountered:", err.message);
    });