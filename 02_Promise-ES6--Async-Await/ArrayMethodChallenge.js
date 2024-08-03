"use strict";

const calcTip = (bill) => {
  return bill >= 0 && bill <= 200 ? bill * 0.2 : bill * 0.3;
};

const bills = [222, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([3, 6, 9]));

console.log(calcAverage(tips));

console.log(calcAverage(totals));
