const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.5,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log("Result");

console.log(mark.calcBMI(), john.calcBMI());

console.log(
  `${mark.bmi > john.bmi ? mark.fullName : john.fullName}'s BMI (${
    mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()
  }) is higher than ${
    john.bmi < mark.bmi ? john.fullName : mark.fullName
  }'s BMI (${
    mark.calcBMI() < john.calcBMI() ? mark.calcBMI() : john.calcBMI()
  }).`
);
