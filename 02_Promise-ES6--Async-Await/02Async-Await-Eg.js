//ONLY PROMISE
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

//ASYNC/AWAIT FUNCTION
const runProcess = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const display = await response.json();
    console.log(display);
  } catch (error) {
    console.log(error);
  }
};
runProcess();
