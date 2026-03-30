import touch from "./utils/touch.js";
import cat from "./utils/cat.js";


// Task 2: Log process info
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("NODE_ENV:", process.env.NODE_ENV || "not set");
console.log("---");

const command = process.argv[2]; // e.g. "touch"
const path = process.argv[3]; // e.g. "./file.txt"

if (command && path) {
  switch (command) {
    case "touch":
      touch(path);
      break;
    case "cat":
      cat(path);
      break;
    default:
      console.log("Unknown command");
  }
} else {
  console.log("Command missing");
}
