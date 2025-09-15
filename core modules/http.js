const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(" You are at the root URL.");
    res.end();
  } else if (req.url === "/about") {
    res.write(" You are at the about page.");
    res.end();
  } else {
    res.write(" Page not found.");
    res.end();
  }
  res.end();
});

server.listen(3000);
console.log("Listening on port 3000...");
