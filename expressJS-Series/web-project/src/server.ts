import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.get("/", (request: Request, response: Response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Application is running in the port ,${port}`);
});
