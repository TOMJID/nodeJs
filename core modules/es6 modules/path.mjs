import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // getting the path.mjs file location dynamically

const __dirname = path.dirname(__filename); // getting the directory name of the file location

// Path methods

console.log("folder details || path.parse =>", path.parse(__filename)); // { object }
console.log("file location || .pathdirname =>", path.dirname(__filename)); // file location
console.log("file extension || path.extname =>", path.extname(__filename)); // .mjs
console.log("file name || path.basename =>", path.basename(__filename)); // path.mjs
console.log(
  "file name without the extension || path.basename =>",
  path.basename(__filename, ".mjs")
); // path
console.log(
  "is absolute path true or false || path.isAbsolute =>",
  path.isAbsolute(__filename)
); // true

const fullPath = path.join(__dirname, "test", "hello.html"); // joining paths

// join path means joining some other paths to the current path even if it doesn't exits like here like test/hello.html was added to the current path .../es6 modules/test/hello.html

console.log("Full path", fullPath);
