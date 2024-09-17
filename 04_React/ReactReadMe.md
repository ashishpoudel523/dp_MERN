ReactJS is front-end library maintained by Facebook.
It was released on May 29, 2013

Creating a React app using Vite is a great alternative to Create React App, offering a faster and more modern development experience. Vite is a build tool that focuses on speed and performance, making it an excellent choice for modern web development.

# Why Choose Vite?

Fast Development Server: Vite provides a lightning-fast development server.
Instant Hot Module Replacement (HMR): Changes reflect instantly without losing the application state.
Optimized Build: Vite uses Rollup for optimized production builds.
Modern Features: It leverages ES modules, which modern browsers support natively.
Steps to Create a React App Using Vite

# Here’s a step-by-step guide to creating a React app using Vite:

Install Node.js: Ensure you have Node.js installed on your machine. You can download it from nodejs.org.

# Create a New Vite Project: Open your terminal and run:

npm create vite@latest my-app --template react

While creating react project if you don't want to create new folder as a new project name, you can write

# Project name: ./

Replace my-app with your desired project name.

npm install

npm run dev

# The Virtual DOM

is React's lightweight version of the Real DOM. Real DOM manipulation is substantially slower than virtual DOM manipulation. When an object's state changes, Virtual DOM updates only that object in the real DOM rather than all of them.

Compilation = euta language bata arko ma laaney jastai water -> alcohol

Transpilation = euta version bata arko version ma lane jastai water -> ice

#Babel is the transpiler for javascript, i.e. it converts advanced js or react to simple js

# JSX className

In JSX, you can’t use the word class! You have to use className instead. This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

When JSX is rendered, JSX className attributes are automatically rendered as class attributes.

#Router
to install router:
npm i react-router-dom

# React

JSX
Components (Functional and Class)
State and Props
Lifecycle Methods
Hooks (useState, useEffect, etc.)
React Router
State Management (Context API, Redux)

TypeScript
Type Annotations
Interfaces and Types
Classes and Inheritance
Generics
Modules
Advanced Types
TypeScript with React
