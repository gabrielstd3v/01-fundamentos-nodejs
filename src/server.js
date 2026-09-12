import http from "node:http";

const server = http.createServer((req, res) => {
  return res.end("Hello Gabriel!");
});

server.listen(3333);
