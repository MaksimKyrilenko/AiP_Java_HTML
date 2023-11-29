"use strict";
let arr = [-1, -2, 4, 5];
function isPositive(arr) {
	for (let elem of arr) {
		if (elem < 0) {
			return false;
		}
	}
	
	return true;
}
let res = isPositive(arr);
console.log(res);