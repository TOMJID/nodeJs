// to use the .env file port (using dotenv)
import dotenv from "dotenv";
import http from "http";
dotenv.config();

// if there any port is declared in .env file it will use that
// if there aren't any it will use 3000 as a fallback
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });

  // destructuring and getting the url from req
  const { url } = req;

  // basic routing using switch
  switch (url) {
    case "/":
      res.end("Welcome th the home page");
      break;
    case "/about":
      res.end("Welcome th the about page");
      break;
    case "/shop":
      res.end("Welcome th the shop page");
      break;
    default:
      res.end("Page not found");
  }
});

server.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}/`);
});
