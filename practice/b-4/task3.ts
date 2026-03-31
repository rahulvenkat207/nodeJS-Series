import { createReadStream } from "fs";

const stream = createReadStream("./india.txt")

stream.on("data",(chunk)=>{
    console.log(chunk)
})

stream.on("error",(err)=>{
    console.log(err)
})