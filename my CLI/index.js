#!/usr/bin/env node
import readline from "readline";

// const args = process.argv.slice(2);
// // console.log("arguments: ", args);

// if (args.length === 0) {
//   console.log("Usage: my-CLI <name>");
//   process.exit(1);
// } else {
//   console.log(`Hello, ${args[0]}! how are you ?`);
// }

// adding interactive in my cli using readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// asking question to user\
rl.question("What's your name? ", (name) => {
  console.log(name);
  rl.close();
});
