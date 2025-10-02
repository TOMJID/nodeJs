import fs from "fs";

fs.readFile("img.jpg", (err, data) => {
  if (err) {
    console.log(`Error reading the image file: ${err}`);
    return;
  }

  // converting the data to base64
  const base64Image = data.toString("base64");

  //data:[MIME TYPE];[encoding],[data]
  const imgSrc = `data:image/jpeg;base64,${base64Image}`;

  // creating a html file content
  const htmlContent = `
  <!DOCTYPE html>
  <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <meta name="viewport" content='width=device-width, initial-scale=1.0'>
      <style>
      body{
       font-family: Arial,sans-serif;
       text-align: center;
       margin:50px;
      }
      img{
      width: 300px;
      border: 2px solid #2c2c2c;
      border-radius: 0.5rem;
      }
      </style>
      <title>Embedded Image into Html</title>
    </head>
    <body>
      <h1>Image Embedded in HTML </h1>
      <img src="${imgSrc}" alt="img">
    </body>
  </html>
  `;

  // creating a html file with fs
  fs.writeFile("index.html", htmlContent, (err) => {
    if (err) {
      console.log("Error writing a html file :", err);
    }
    console.log("Html file with Embedded img saved successfully done!");
  });
});
