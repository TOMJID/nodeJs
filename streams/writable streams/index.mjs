import { writeFile } from "fs";
import fs from "fs";

writeFile("write.txt", "hello", () => {});
const writableStream = fs.createWriteStream("write.txt");

writableStream.write("This is from writable stream 1st \n");
writableStream.write("This is from writable stream 2nd \n");
writableStream.write("This is from writable stream 3rd \n");
writableStream.write("This is from writable stream 4th \n");

writableStream.on("finish", () => {
  console.log("Writing finished ....");
});

