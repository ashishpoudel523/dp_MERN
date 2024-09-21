# ReactJS

front-end library maintained by Facebook.
It was released on May 29, 2013

Creating a React app using Vite is a great alternative to Create React App, offering a faster and more modern development experience. Vite is a build tool that focuses on speed and performance, making it an excellent choice for modern web development.

# Create new project (CRA)

npx create-react-app my-frontend-app
cd my-frontend-app
npm start

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
OR,
npm create vite@latest
project name:
Select React
Select Javascript / Typescript

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

# Router

to install router:
npm i react-router-dom

# Components (fileName.jsx)

Components in React = Single independent unit of user interface(UI) that lets you split into reusable pieces, and they can be functional or class-based.

1. Functional Components (Simpler Approach) preferred because of React Hooks
2. Class Components (Legacy Approach)

# Hot Module Replacement (HMR)

Tool used to auto reload after making changes in the files.

# Props

A prop (short for property) is an input that you can pass to a component when rendering that component.
Eg.:
Home.jsx

---

function Home(){
return (
<>

<h1>Props Demo</h1>
<Card title = "card-design"/ >
<Button text="Register" />
<Button text="Login" />
<Button text="Logout" />
</>
)
}
where title is prop of Card and text is prop of Button Component.

# Hooks

In React, hooks are special functions that allow functional components to use state and other React features such as lifecycle methods and side effects, without writing a class. They provide a way to "hook into" React's core functionalities like state management, context, and rendering logic.

-**- Key Characteristics: -**-

Used in functional components: Hooks enable functional components to handle state and other features that were previously only available in class components.

Start with "use": All hooks have names that start with "use" (e.g., useState, useEffect).

Do not work in classes: Hooks only work in functional components, not in class-based components.

Cannot be called conditionally: Hooks should always be called at the top level of the component, not inside loops or conditional statements, ensuring that the order of hooks is preserved between renders.

-**- Main Purpose of Hooks: -**-

State Management: Use hooks like useState to manage local component state.

Side Effects: Use hooks like useEffect to perform side effects such as fetching data or subscribing to external services.

Optimization: Hooks like useMemo and useCallback help optimize performance by memoizing values or functions to prevent unnecessary recalculations or renders.

Hooks allow you to build complex, stateful, and dynamic components in React using a simpler and more functional approach.

# Types of Hooks

1. **useState**

In React, states are arbitrary data that you can declare and manage in your components.

Purpose: Manages state in functional components.

When calling the useState() function, you can pass an argument that will serve as the initial value of the state. The function then returns an array with two elements.

The first element holds the state value, and the second element is a function that allows you to change the state value. You need to use the destructuring array syntax to receive both elements as shown above

You can give any names to the variables returned by useState, but it's recommended to use
const [state, setState] = useState(initialValue);

To render the state value, you can embed it into JSX as follows:

import { useState } from 'react'

function ParentComponent() {
const [name, setName] = useState('John')

return (
<>

<h1>Hello {name}</h1>
</>
)
}

export default ParentComponent

2. **useEffect in React**

Purpose: Handles side effects like fetching data, manually changing DOM, setting up subscriptions, or updating state based on external data. (e.g., data fetching, subscriptions).

Syntax: useEffect(callback, [dependency_array]);

Usage: Runs after the component renders or updates, useful for API calls, DOM manipulation.

Example:

useEffect(() => {
// side effect logic here
return () => {
// Cleanup logic here (optional)
}
}, [dependencies]);

# 3 Types of useEffect (based on Trigger point)

(a) useEffect with No Dependencies (Runs on Every Render):
Runs all the time (every render). Good for general updates.

useEffect(() => {
console.log("Component rendered or updated");
});

(b) useEffect with an Empty Dependency Array:
Runs just once (on mount). Good for setup. setting up subscriptions that don’t need to change.

useEffect(() => {
console.log("Component mounted");
}, []);

(c) useEffect with Specific Dependencies Array (Runs When Dependencies Change):
Runs only when certain values change. Good for reacting to specific changes.

useEffect(() => {
console.log("Count changed to", count);
}, [count]);

3. **useContext**

Purpose: Accesses values from a React context without prop drilling.

Syntax: const value = useContext(Context);

Usage: Shares state or data across components via context.

Example:
const theme = useContext(ThemeContext);

4. **useReducer**

Purpose: Manages more complex state logic (alternative to useState).

Syntax:
const [state, dispatch] = useReducer(reducer, initialState);

Usage: Useful for managing complex or multiple state transitions.

Example:

const [state, dispatch] = useReducer(reducer, { count: 0 });

5. **useRef**

Purpose: Accesses DOM elements or stores mutable values that persist across renders without causing re-renders.

Syntax: const ref = useRef(initialValue);

Usage: Useful for direct DOM manipulation or to hold values like timers.

Example:

const inputRef = useRef(null);
inputRef.current.focus(); // Accesses the DOM element

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
