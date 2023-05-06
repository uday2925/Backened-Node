const http = require("http");
const server = http.createServer((req, res) => {
  //logic for server
  if (req.url === "/") {
    res.end("hello uday 8080 at endpoint /");
  }
  else if (req.url === "/contact") {
    res.end("contact me @90100159");
  } else if (req.url === "/post" && req.method === "POST") {
    res.end("You made post request");
  } else {
    res.write(
      "here i used res.write() so browser will be loading till you write res.end()"
    );
    res.write(
      "/n" + "i used nodemon so that server will start after every update"
    );
    res.end();
  }
});

server.listen(8080, () => {
  console.log("server is running at port 8080");
});
