// const myFunction = () => {
//     let age2 = 45
//     // var age = 25

// }

// myFunction()

// console.log(age2)

//PROMISE AND REJECT

const isPhoneStore = true;
const isPhoneAvailable = false;

function ProcessMessage() {
  return new Promise((resolve, reject) => {
    if (!isPhoneStore) {
      reject({
        name: "Wrong Store !",
        message: `Sorry, this is a food store.`,
      });
    } else if (!isPhoneAvailable) {
      reject({
        name: "Out of stock!",
        message: "Sorry the iPhone 14 Pro Max is not available.",
      });
    } else {
      resolve({
        name: "Phone is available.",
        message: "You can pick up the iPhone 14 Pro Max.",
      });
    }
  });
}

ProcessMessage()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

const averageScore = (calcAverage) => {};

const checkWinner = function () {};

//CODING CHALLENGE 3

const dolphinsScore = (74 + 108 + 99) / 3;
console.log(dolphinsScore);

const koalasScore = (88 + 91 + 110) / 3;
console.log(koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log(`Team dolphin wins with ${dolphinsScore} score.`);
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log(`Team Koalas win with ${koalasScore} score.`);
} else if (
  dolphinsScore === koalasScore &&
  dolphinsScore >= 100 &&
  koalasScore >= 100
) {
  console.log(`Draw score.`);
} else {
  console.log(`No team wins trophy.`);
}
