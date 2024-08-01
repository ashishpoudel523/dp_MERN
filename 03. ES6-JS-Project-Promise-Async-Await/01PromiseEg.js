const inventory = {
  apple: 45,
  banana: 21,
  orange: 12,
};
console.log(inventory);

//FUNCTION-ENCAPSULATED PROMISE
const orderApples = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inventory.apple > 2) {
        resolve("Buy apples");
      } else {
        reject("No fruits.");
      }
    }, 3000);
  });
};

orderApples()
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(console.log("Compulsory output, resolve vayeni, reject vayeni"));
