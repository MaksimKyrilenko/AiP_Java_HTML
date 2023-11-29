"use strict";
let arr = [1, 1, 4, 5];
function isPositive(arr) {
	let j = 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[j]) {
			return false;
		}
		j++
	}
	
	return true;
}
let res = isPositive(arr);
console.log(res);