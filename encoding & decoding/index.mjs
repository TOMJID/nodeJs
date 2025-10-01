const buffer = Buffer.from("Hello world!", "utf-8");

console.log(buffer.length);
console.log(buffer.toString());

// encoding buffer ("utf-8","base64")
const bufferUtf8 = Buffer.from("My name is Tomjid", "utf-8");
console.log(bufferUtf8.toString());

// converting bufferUtf-8 to base64
const bufferBase64 = bufferUtf8.toString("base64");
console.log(bufferBase64);

// decoding base64 to original form
const decodedBuffer = Buffer.from(bufferBase64, "base64");
console.log(decodedBuffer.toString("utf-8"));
