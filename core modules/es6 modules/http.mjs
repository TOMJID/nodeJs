import { createServer } from "node:http";

// creating the server
const server = createServer((req, res) => {
  const url = req.url;

  // checking the url and showing data according to the url
  if (url === "/") {
    res.write("you are at root page");
    res.end();
  } else if (url === "/about") {
    res.write("you are now at about page");
    res.end();
  } else {
    res.write("check the url");
    res.end();
  }
});

const PORT = 3000;

// assigning a port || url location where i can see the website
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
