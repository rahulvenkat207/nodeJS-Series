import { request

} from "https";

import { createWriteStream} from "fs";

const writable = createWriteStream("./file.txt")

const options= {
    host: 'jsonplaceholder.typicode.com', // the server's domain
    path: '/todos/1',                      // the resource you want
    method: 'GET',
}

const req = request(options,(res)=>{
     res.pipe(writable)

    res.on("end",()=>{
        console.log("writing completed")
    })
})

req.end()

