import { request } from "node:https";
import { IncomingHttpHeaders, RequestOptions } from "node:http";

interface Response {
    data: any;
    headers: IncomingHttpHeaders;
}

function performOperation(option: RequestOptions): Promise<Response> {
    return new Promise((resolve, reject) => {
        // We store the request in a variable so we can listen for errors
        const req = request(option, (res) => {
            const { headers } = res;
            let data = '';

            res.on("data", (chunk) => data += chunk);

            res.on("end", () => {
                try {
                    // Try to parse, but catch errors if the data is messy
                    resolve({
                        data: JSON.parse(data),
                        headers,
                    });
                } catch (err) {
                    reject(new Error("Failed to parse JSON response"));
                }
            });
        });

        // CRITICAL FIX: Handle network/DNS/timeout errors
        req.on("error", (err) => {
            reject(err);
        });

        req.end();
    });
}

// Usage
performOperation({
    host: 'jsonplaceholder.typicode.com',
    path: '/todos/1',
    method: 'GET',
})
    .then((response) => console.log("Success:", response.data))
    .catch((error) => console.error("Error Caught:", error.message));
