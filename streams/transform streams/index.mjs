import { Transform } from "stream";

const transformStream = new Transform({
  // this transform method takes 3 things =>
  // 1: chunk    / data
  // 2: encoding / to show the data in witch format
  // 3: callback / call this when the write operation is complete
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});
//process.stdin || whatever you type in terminal
//pipe(transformStream) || whatever you type in terminal
//process.stdout || sends the transformed data to the terminal
process.stdin.pipe(transformStream).pipe(process.stdout);
