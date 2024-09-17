# NODEJS

open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!
Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser
runs in a single process
Node is often described as having event-driven architecture.
provides a set of asynchronous I/O primitives
performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.
When modules created by other developers are used in our code, they're called dependencies.

# NPM = for package management / command line tool to install, create, and share packages, dependencies of JavaScript code written for Node.js

popular Node.js package is nodemon, a tool used to automatically restart a program when a file changes, alleviating the need to do so manually each time you save a file

if there is nodemon installed, and in package.json there's
"scripts":{
"start/test": "nodemon app.js",
you can run server by "npm start/test"
AND if "scripts": {
"dev/or any other word": "nodemon app.js"
},
you should do "npm run dev/or any other word"
}

Since Node 18.11.0, New Method for automatic restart (alternative of nodemon)=
node --watch app.js

# What are Modules?

Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. A modular program is one whose components can be separated, used individually, and recombined to create a complex system.
Some are events, os, error, buffer, fs, and timer modules

# Express is nodejs web framework that will allow you to start and configure a server with very little overhead so you can focus on the important work of defining server behavior.

EJS (js+html+additional features) = npm i ejs for embedded javascript
for that
app.set('view engine', 'ejs')

# Blocking Code Example

To understand the callback feature, save the following text as input.txt file.
TutorialsPoint is the largest free online tutorials Library
Master any technology.
From programming languages and web development to data science and cybersecurity

The following code reads the file synchronously with the help of readFileSync() function in fs module. Since the operation is synchronous, it blocks the execution of the rest of the code.

<script>
let fs = require("fs");
let data = fs.readFileSync('input.txt');

console.log(data.toString());

let i = 1;
while (i <=5) {
  console.log("The number is " + i);
  i++;
}

The output shows that Node.js reads the file, displays its contents. Only after this, the following loop that prints numbers 1 to 5 is executed.

TutorialsPoint is the largest free online tutorials Library
Master any technology.
From programming languages and web development to data science and cybersecurity

The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
</script>

# Non-Blocking Code Example

We use the same input.txt file in the following code to demonstrate the use of callback.

TutorialsPoint is the largest free online tutorials Library
Master any technology.
From programming languages and web development to data science and cybersecurity

The ReadFile() function in fs module is provided a callback function. The two arguments passed to the callback are error and the return value of ReadFile() function itself. The callback is invoked when ReadFile() finishes by returning either error or file contents. While the file read operation is inprocess, Node.js asynchronously runs the subsequent loop.

<script>
const fs = require("fs");
fs.readFile('input.txt', function (err, data) {
if (err) return console.error(err);
console.log(data.toString());
});

let i = 1;
while (i <=5) {
console.log("The number is " + i);
i++;
}
Output
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
TutorialsPoint is the largest free online tutorials Library
Master any technology.
From programming languages and web development to data science and cybersecurity
</script>

# MIDDLEWARE

software that sits between the operating system and the applications on a network, providing common services and capabilities to applications outside of what's offered by the operating system. In web development, middleware refers to functions or methods that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

In the Context of Express.js
In an Express application, middleware functions are functions that can:

Execute any code.
Make changes to the request and response objects.
End the request-response cycle.
Call the next middleware function in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

Types of Middleware:

# 1 Application-level Middleware: Bound to an instance of the express object and used throughout the app.

# code

<script>
//importing module
const express = require('express');
const app = express();

app.use((req, res, next) => {
console.log('Time:', Date.now());
next();
});

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(3000);

#2 Router-level Middleware: Bound to an instance of express.Router(), useful for modularizing the application.

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
console.log('Request URL:', req.originalUrl);
next();
});

router.get('/', (req, res) => {
res.send('Home Page');
});

const app = express();
app.use('/home', router);
app.listen(3000);

#3 Error-handling Middleware: Defined with four arguments instead of three. These middleware functions handle errors in the application.

javascript
Copy code
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});


#4 Built-in Middleware: Provided by Express to handle common tasks.

app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with URL-encoded payloads
Third-party Middleware: Installed via npm and used to perform tasks such as logging, authentication, etc.


const morgan = require('morgan');
app.use(morgan('combined')); // Logs HTTP requests

# Real-life Example
Imagine you are building an e-commerce website:

Logging Middleware: Logs the details of every request for monitoring and debugging.
Authentication Middleware: Checks if the user is logged in before accessing certain routes.
Error-handling Middleware: Catches errors and sends a user-friendly error message to the client.

# What is an ORM?

An ORM (Object-Relational Mapping) is a technique that allows developers to interact with a database using an object-oriented paradigm. ORMs provide a way to map database tables to classes, rows to objects, and columns to object attributes, simplifying database operations.

# Sequelize

Sequelize is a popular ORM for Node.js that supports various SQL-based databases like MySQL, PostgreSQL, SQLite, and MSSQL. It provides an easy-to-use API for defining models, performing CRUD operations, and running queries.
