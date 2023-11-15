"use strict";
var num = parseInt(prompt("Введите число: "));
if (num >= 10 && num <= 99) {
  var sum_of_digits = num.toString().split('').reduce(function(sum, digit) {
    return sum + parseInt(digit);
  }, 0);
  if (sum_of_digits <= 9) {
    console.log("Сумма цифр однозначна");
  } else {
    console.log("Сумма цифр двухзначна");
  }
} else {
  console.log("Число не попадает в диапазон от 10 до 99");
}