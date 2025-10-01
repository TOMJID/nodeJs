import fs from "fs";

// Read the original file
fs.readFile("files/example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Original data:", data);

  // Encode to base64
  const encodedData = Buffer.from(data).toString("base64");
  console.log("Encoded data:\n", encodedData);

  // Save encoded data
  fs.writeFile("files/encoded.txt", encodedData, (err) => {
    if (err) throw err;
    console.log("Encoded file saved in files/encoded.txt");

    // Read the encoded file AFTER it's written
    fs.readFile("files/encoded.txt", "utf8", (err, encodedContent) => {
      if (err) throw err;

      // Decode from base64
      const decodedData = Buffer.from(encodedContent, "base64").toString("utf8");
      console.log("Decoded data:", decodedData);

      // Save decoded data
      fs.writeFile("files/decoded.txt", decodedData, (err) => {
        if (err) throw err;
        console.log("Decoded file saved in files/decoded.txt");
      });
    });
  });
});