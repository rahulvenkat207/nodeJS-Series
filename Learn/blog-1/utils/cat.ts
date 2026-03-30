import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

export default async function cat(path: string) {
  try {
    const content = await readFile(path, { encoding: "utf8" }); // encoding: 'utf8' gives you a string, not raw bytes
    console.log(content);
  } catch (error) {
    console.log(error);
  }
}
