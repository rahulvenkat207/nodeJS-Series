import cat from "./utils/cat";
import del from "./utils/delete";
import touch from "./utils/touch";

console.log()

const command = process.argv[2]
const path = process.argv[3]

switch(command){
   case 'touch':
    touch(path)
    break;
   case 'cat':
    cat(path)
    break;
   case 'del':
    del(path)
    break;


}