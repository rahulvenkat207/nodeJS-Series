import { request

} from "https";

const options= {
    host: 'jsonplaceholder.typicode.com', // the server's domain
    path: '/todos/1',                      // the resource you want
    method: 'GET',
}


const req = request(options, (res) => {
    const chunks: Buffer[] = [];
    res.on("data", (chunk) => {
        chunks.push(chunk);
    });

    res.on("end", () => {
        const result = Buffer.concat(chunks).toString();
        console.log("Response Body (Buffer to String):", result);
    });
});

req.on("error", (err) => {
    console.error("Request Error:", err.message);
});

req.end();