const favWords = [
  "manipulation",
  "contigent",
  "worst",
  "numbers",
  "ramp",
  "perseverence",
];

const longFav = favWords.filter((fav) => {
  if (fav.length > 8) {
    return true;
  }
});

console.log(longFav);

/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radius) {
  return PI * radius * radius;
}

function squareArea(sLength) {
  return sLength * sLength;
}

module.exports = {
  circleArea,
  squareArea,
};

/* app.js */
const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.

// const areaFunctions = require('./shape-area.js')

// Option 2: import circleArea and squareArea with object destructuring

const { circleArea, squareArea } = require("./shape-area.js");

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);
const areaOfSquare = squareArea(sideLength);

console.log("Area of Circle:", areaOfCircle);
console.log("Area of Square:", areaOfSquare);
