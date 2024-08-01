/*Using Promises Only
In this example, we will:

Fetch user data.
Fetch posts for the user.
Log both user data and posts.
Here's how the code might look using Promises only:
*/

function fetchUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }
  );
}

function fetchPosts(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

function getUserAndPosts(userId) {
  fetchUser(userId)
    .then((user) => {
      console.log("User:", user);
      return fetchPosts(user.id);
    })
    .then((posts) => {
      console.log("Posts:", posts);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getUserAndPosts(1);

/*
Issues with Promises Only

Callback Hell: The .then() chaining can become nested and harder to read as more steps are added.

Error Handling: Errors in any step will be caught by the .catch() at the end, but it can be less clear where exactly the error occurred.



Using Async/Await
Now, let's rewrite the same example using async and await to make it cleaner:
*/

async function fetchUser(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function fetchPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function getUserAndPosts(userId) {
  try {
    const user = await fetchUser(userId);
    console.log("User:", user);
    const posts = await fetchPosts(user.id);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUserAndPosts(1);

/*
Benefits of Using Async/Await

Readability: The code looks more synchronous and is easier to follow. Each await statement pauses execution until the Promise resolves, making the flow of logic clearer.

Error Handling: try...catch blocks can be used to handle errors, which is more intuitive and can catch errors from any step in the async function.

Maintains Structure: The code remains flat and avoids deep nesting, which is common with multiple .then() calls.

Summary

Promises Only: Can lead to deeply nested .then() calls and complex error handling when dealing with multiple asynchronous steps.

Async/Await: Provides a more readable and maintainable approach, especially for complex asynchronous operations with multiple steps and error handling.
*/
