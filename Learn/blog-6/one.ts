import { request

} from "https";

const options= {
    host: 'jsonplaceholder.typicode.com', // the server's domain
    path: '/todos/1',                      // the resource you want
    method: 'GET',
}

const req = request(options,(res)=>{
    let data = '';

    res.on("data",(chunk)=>[
        data += chunk
    ])

    res.on("end",()=>{
        console.log("Response Body: ",JSON.parse(data))
    })
    
    
  
})

req.end()