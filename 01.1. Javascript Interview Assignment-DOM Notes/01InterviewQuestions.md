<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  //arrow function demo
let ab = (a, b) => {
    return a * b;
  };
  console.log(ab(3, 5));
  
  1. most repeated number dekhauni
  function mostFrequentNumber(arr) {
      const count = {};
      let maxCount = 0;
      let mostFrequent;
  
      // Count occurrences of each number
      for (let num of arr) {
          count[num] = (count[num] || 0) + 1;
          // Keep track of the most frequent number
          if (count[num] > maxCount) {
              maxCount = count[num];
              mostFrequent = num;
          }
      }
  
      console.log(`The most frequent number is ${mostFrequent} with ${maxCount} occurrences.`);
  }
  
  // Example usage:
  const numbers = [1, 3, 2, 1, 4, 1, 3, 4, 4, 4, 5, 3];
  mostFrequentNumber(numbers);
  
  
  
  2. p tag dom bata add garni
  const para = document.getElementById("myId");
  
  const newPara = document.createElement("p");
  
  newPara.textContent = `It's newly added paragraph`;
  
  para.appendChild(newPara);
  
  
  
  3. yo naam haru list ma dekhauni
  const names = ["Rohan", "Anil", "Rohit", "Sugam"];
  
  /* 
  <ul id='nameList'>
      js inserts list here
  </ul> 
  */
  
  // Select the ul element with id "nameList"
  const nameList = document.getElementById("nameList");
  
  // Loop through the array and create li elements
  names.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    nameList.appendChild(listItem);
  });
  
  
  
  4. button click garda console ma kei print huni
  
  const y = document.getElementById("myDiv");
  
  y.addEventListener("click", function () {
    console.log("Button clicked.");
  });
  
  
  
  1. var = function scope, hoisting yes, reassignment, redeclaration, not used now
  let = block scope, no hoisting temporal dead zone, reassigned, no redeclared
  const = block scope, no(hoisting, ressign, redeclare)
  
  2. global , local scope
  =global accessible from anywhere in the code., local accessible only within that block or function.
  
  3. arrow function why used/adv? (only for making function small or other purpose too?)
  = shorter and concise 1 line syntax, lexical this binding, not return keyword needed 1 line code, used as callbacks, array methods(map, forEach, reduce)
  
  4. arrow vs normal fn
  =Arrow : Best for concise syntax, inheriting this from the surrounding scope, and scenarios where you do not need arguments or a constructor.
  Traditional : Better for methods that require their own this, handling variable numbers of arguments, and being used as constructors.
  
  5. high order function 
  = function that either: Takes one or more functions as arguments, or Returns a function as its result
  
  6. callback fn
  =function that you pass as an argument to another function, and it gets executed after the completion of that function's task, often used in asynchronous programming to handle operations that are completed later, such as reading files or making network requests.
  
  7. sync, async programming
  = sync Executes tasks sequentially, where each task waits for the previous one to complete, 
  async Executes tasks concurrently, allowing other tasks to proceed while waiting for a particular task to complete.
  
  8. Promise used why?
  =Non-blocking I/O, asynchronous operations, Improved Readability, Avoid Callback Hell, Better Error Handling, Chaining
  
  9. resolve, reject
  = resolve: A function used to fulfill a promise with a successful result, 
  reject: A function used to reject a promise with an error or failure.
  
  10. async, await
  =Aviod Promise Hell, Better Readability like synchronous flow, Better Error handling try-catch, Conditional Logic No Chaining, Maintainability of functions 
  
  11. DOM manipulation 
  =manipulating HTML using JS DOM, not with css
  
  12. events handling
  = interacting with web pages and making them responsive
  
  13. spread operator uses
  =Spread Operator: Expands elements of an array or properties of an object.
  Rest Operator: Collects elements or properties into an array or object.
  
  14. anonymous function
  
  css =  grid 2 dimensional, flexbox 1 dimensional, z-index Controls the stacking order of positioned elements, 
  pseudo code Apply styles to elements based on their state or position in the document using colon a:hover{}, 
  mediaquery - Adjust styles based on screen size or other conditions for responsive design
  
  Postgres vs MySQL
  =PostgreSQL is renowned for its extensive SQL compliance, support for complex queries, custom data types, and high extensibility, making it ideal for sophisticated applications and complex data relationships, whereas MySQL is favored for its simplicity, speed in read-heavy operations, and ease of use, particularly suited for web applications and scenarios requiring high performance with straightforward database structures.
</body>
</html>
