"use strict";
function test() {
	let num = 10;
	
	return function() {
		console.log(num);
		num = num - 1; 
		return num;
	}
}

let func = test();
console.log(func());