// fs , http , path , os
const http = require("http");
const os = require("os");

const custom = require("./custom");

console.log(`Sum : ${custom.add(5, 10)}`);

// console.log("Platform : " + os.platform());
// console.log("Total Memory : " + os.totalmem());
// console.log("Free Memory : " + os.freemem());

const server = http.createServer();

server.listen(4000, () => {
  console.log("Server is listening on PORT : 4000");
});

/*
  1. fast execution
  2. asyncronous and non blocking
  3. single programming Language -    JavaScript
  4. Large community support
*/
