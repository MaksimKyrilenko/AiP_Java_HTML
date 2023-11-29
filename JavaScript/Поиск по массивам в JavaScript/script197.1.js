"use strict";
let arr = [1, 2, 3, 4, 5];

let res = arr.find(function(currentValue) {
	return currentValue == 3;
});

console.log(res);