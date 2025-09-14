const path = require("path");

const myPath = "/home/tomjid/Documents/Codes/nodeJs/core modules/path.js";

console.log(path.parse(myPath)); // { object}
console.log(path.dirname(myPath)); // file location
console.log(path.extname(myPath)); // .js / file extension
console.log(path.basename(myPath)); // file name
console.log(path.basename(myPath, ".js")); // file name without extension
console.log(path.isAbsolute(myPath)); // true  | is absolute path true or false
console.log(path.isAbsolute("./path.js")); //  false | is absolute path true or false
