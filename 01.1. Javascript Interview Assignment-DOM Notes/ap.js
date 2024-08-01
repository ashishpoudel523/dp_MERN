// const a = document.getElementById("red");

// const c = document.createElement("p");

// c.innerHTML = "gggggggggggggggggggggggggggg";

// a.appendChild(c);

// const z = (document.getElementById("red").innerHTML = "<h2>ssssssssssss</h2>");

let arr = [234, 65464, 86785, 3121, 9769, 7654, 4234, 324, 656, 8765];
function maxArr(arr) {
  let max = 0;
  for (let i of arr) {
    if (max < i) {
      max = i;
    }
  }
  console.log(max);
}
maxArr(arr);
console.log("Result");

// for (let j of arr) {
//   console.log(j);
// }
