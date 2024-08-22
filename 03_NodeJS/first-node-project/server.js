import { createServer } from "http";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console.log(1 + +"1");
/*
for EcmaJS, 
import { createServer } from "node:http";
and 
there must be in 'package.json'
{
  "type": "module"
}

for commonJS
const {createServer} = require('node:http') 
*/
