"use strict";
function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let res = sum(round(sqrt(2)), round(sqrt(3)), round(sqrt(4)));
console.log(res);