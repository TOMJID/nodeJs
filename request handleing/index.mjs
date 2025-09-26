import http from "http";

// server post
const port = 3000;

// creating a server with http modules
const server = http.createServer((req, res) => {
  // setting header for 200 status code
  res.writeHead(200, { "content-type": "text/plain" });
  console.log("Server is getting", req.method, "method");

  // what to do on GET request
  if (req.method === "GET") {
    res.end("You just made a GET request to server");
    // what to do on POST request
  } else if (req.method === "POST") {
    res.end("You just made a GET request to server");
    // what to do on PUT request
  } else if (req.method === "PUT") {
    res.end("You just made a PUT request to server");
    // what to do on undefine request
  } else {
    res.writeHead(400, { "content-type": "text/plain" });
    res.end("404 NOT found");
  }
});

// listening the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
