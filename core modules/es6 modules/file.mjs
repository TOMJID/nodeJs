import { readFile, writeFile, unlink } from "node:fs";

// read this file
readFile("./file.mjs", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// make a new file that has "Hello World!" text in it

writeFile("./file.txt", "Hello World!", (err) => {
  if (err) throw err;
  console.log("file written successfully");
});

// delete the file that is called file.txt

unlink("./file.txt", (err) => {
  if (err) throw err;
  console.log("file deleted successfully");
});
