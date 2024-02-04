// inch to feet converter

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchToHeight(inch) {
  const feet = inch / 12;
  const feetNumber = parseInt(feet);
  const feetRemaining = inch % 12;
  const result = feetNumber + " ft " + feetRemaining + " inch";
  return result;
}

const myFeet = inchToFeet(67);
// console.log(myFeet);
const bodyHeight = inchToHeight(60);
console.log(bodyHeight);
