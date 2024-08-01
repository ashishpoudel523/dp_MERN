import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

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

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
myFunc();
