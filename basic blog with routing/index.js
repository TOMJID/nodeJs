//Importing the HTTP Module
import http from "http";

// Setting the Port
let port = process.env.PORT || 3000;

// Creating the HTTP Server
const server = http.createServer((req, res) => {
  // Extracting the URL from request
  const { url } = req;

  res.writeHead(200, { "content-type": "text/plain" });

  //  Route Handling Logic
  if (url === "/") {
    res.end("Welcome to the home page");
  } else if (url === "/blogs") {
    res.end("Displaying all the blogs ...");
  } else if (url.startsWith("/blogs/")) {
    //Extracts the blog post ID
    const postId = url.split("/")[2];
    // console.log(url)
    // console.log(url.split("/")[2]);
    // console.log(postId);
    res.end(`{ "id" : ${postId}, \n "title" : title ${postId}, \n}`);
  } else {
    res.end("Check the url & try again later ..");
  }
});

//Starting the Server
server.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}/`);
});
