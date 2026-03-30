import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile)

export default async function cat(path:string)
{
    try{
    const data = await readFile(path)
    console.log(data.toString())
    console.log("Reading done")
}

    catch {
        console.log("Error in reading the file")
    }

}
