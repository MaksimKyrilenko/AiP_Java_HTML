"use strict";
let num = 123456;
let firstSum = Number(String(num)[0]) + Number(String(num)[1]) + Number(String(num)[2]);
let secondSum = Number(String(num)[3]) + Number(String(num)[4]) + Number(String(num)[5]);
if (firstSum === secondSum) {
  console.log('да');
} else {
  console.log('нет');
}