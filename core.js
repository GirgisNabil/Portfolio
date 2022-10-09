const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  fs.readFile("./src/App.js", (err, data) => {
    if (err) {
      console.log("errore");
    } else {
      res.writeHead(200, { "content-type": "application/javascript" });
      res.write(data.toString());
      res.end();
    }
  });
});

const port = 5555;

server.listen(port, () => {
  console.log(`Server is on port ${port} in its up and running dooog !! fkr`);
});
