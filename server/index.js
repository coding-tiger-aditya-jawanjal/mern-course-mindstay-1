const http = require("http");

const server = http.createServer();

server.listen(4000, () => {
  console.log("Server is listening on PORT : 4000");
});
