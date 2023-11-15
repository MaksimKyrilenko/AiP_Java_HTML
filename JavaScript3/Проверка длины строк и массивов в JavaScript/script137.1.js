"use strict";
let arr = [1, 2, 3];
let sum;

if (arr.length === 3) {
  sum = arr[0] + arr[1] + arr[2];
  console.log(sum);
} else {
  console.log('Массив не содержит 3 элемента');
}