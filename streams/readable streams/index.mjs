import fs from "node:fs";

// file path
const path = "../text.txt";

// how many word will load after every time
const words = 64;

// create a readable stream
const readStream = fs.createReadStream(path, {
  encoding: "utf-8",
  highWaterMark: words,
});

// what to do while reading data
readStream.on("data", (chunk) => {
  console.log(`Received chunk: ${chunk.length} bytes`);
});

// what to do after completing the read
readStream.on("end", () => {
  console.log("file reading done");
});
