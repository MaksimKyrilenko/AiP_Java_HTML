"use strict";
for (let i = 10; i <= 1000; i++) {
  let numberString = i.toString();
  let firstDigit = parseInt(numberString[0]);
  let secondDigit = parseInt(numberString[1]);
  let sum = firstDigit + secondDigit;
  console.log(sum);
}
