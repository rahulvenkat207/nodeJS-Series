import { createReadStream,createWriteStream, read } from "node:fs";

const readable = createReadStream(",/file.txt","utf8");
const writable = createWriteStream("./file1.txt","utf8");

readable.on("data",(chunk)=>{
    writable.write(chunk)
})

readable.on("end",()=>{
    console.log("reading is done")
})

readable.on("error",(err)=>{
    console.log("error in the reading",err.message)
})

