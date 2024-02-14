const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const urlParse = url.parse(req.url, true);
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  if (urlParse.pathname == "/getdata" && req.method == "GET") {
    res.end("Hello world!");
  }
});
server.setTimeout(10 * 60 * 1000);
server.listen(8080);
