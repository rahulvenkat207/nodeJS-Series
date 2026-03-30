import * as fs from "fs";
import * as util from "util";

const unlink = util.promisify(fs.unlink);

export default async function deleteFile(path: string) {
  try {
    await unlink(path);
    console.log("File deleted successfully");
  } catch (error) {
    console.log(error);
  }
}
