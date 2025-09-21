import { Duplex } from "node:stream";

// this is to create a new Duplex instance
const duplexStream = new Duplex({
  // write method takes 3 things >
  // 1: chunk    / data
  // 2: encoding / to show the data in witch format
  // 3: callback / call this when the write operation is complete
  write(chunk, encoding, callback) {
    console.log(`Writing : ${chunk.toString()}`);
    callback();
  },
  // in read method to add data we need to use this.push('data') to add data
  // and we need to use this.push(null) to send signal saying reading is done
  read() {
    this.push("hello from duplex streams chunk 1! \n");
    this.push("hello from duplex streams chunk 2! \n");
    this.push("hello from duplex streams chunk 3! \n");
    this.push(null);
  },
});

duplexStream.on("data", (chunk) => {
  console.log(`reading : ${chunk.toString()}`);
});

duplexStream.write("this is testing...");
duplexStream.end("reading finished");
// after .end is called the the read() will be called in my case "hello from duplex streams chunk 1!"
