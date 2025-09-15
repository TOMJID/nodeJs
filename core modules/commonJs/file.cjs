const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from Node.js"); // Create a file named hello.txt with the specified content

fs.writeFileSync("hello.txt", "hello world."); // Over write the existing text  with hello world.

fs.appendFileSync("hello.txt", "\nI am learning Node.js sync way"); // Append a new line with the I am learning Node.Js async

//TODO   best practice to read file data with async

//* Sync way
const Sync = fs.readFileSync("hello.txt"); // Read the content of the file
console.log(Sync); // default format raw buffer data
console.log(Sync.toString()); // Convert the buffer to string

//* async way
// async take two arguments first one is file name second one is callback function
// callback function take two arguments first one is error second one is data
fs.readFile("hello.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data.toString());
});

fs.unlinkSync("hello.txt"); // delete the file
