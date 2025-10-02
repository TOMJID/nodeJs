#!/usr/bin/env node

const args = process.argv.slice(2);
// console.log("arguments: ", args);

if (args.length === 0) {
  console.log("Usage: my-CLI <name>");
  process.exit(1);
} else {
  console.log(`Hello, ${args[0]}! how are you ?`);
}
