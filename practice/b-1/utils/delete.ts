import * as fs from "fs";
import * as util from "util";


const unLink = util.promisify(fs.unlink);

export default async function del(path : string){
    try{
        await unLink(path)
        console.log("File deleted SuccessFully")
    }
    catch{
        console.log("Error is file deleting")
    }

}