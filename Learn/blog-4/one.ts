import { createReadStream }  from "fs";

const stream = createReadStream("./file.txt","utf8")

stream.on('data',(chunk)=>{
    console.log("New Chunk",chunk)
})

stream.on('error',(err)=>{
    console.error("Error",err)
})