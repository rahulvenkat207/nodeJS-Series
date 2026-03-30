import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

// WITH encoding — you get a plain string back
readFile("./file.txt", { encoding: "utf8" }).then((content) => {
  console.log(typeof content); // 'string'
  console.log(content);
});

// WITHOUT encoding — you get a raw Buffer back
readFile("./file.txt").then((content) => {
  console.log(content instanceof Buffer); // true
  console.log(content.toString()); // manually decode it
});
