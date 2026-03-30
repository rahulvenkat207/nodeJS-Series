import * as fs from "fs";
import * as util from "util";


const writeFile = util.promisify(fs.writeFile);

export default async function touch(path : string){
    try{
        await writeFile(path,"")
        console.log("File created SuccessFully")
    }
    catch{
        console.log("Error is file writing")
    }

}