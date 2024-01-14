"use strict";
function test() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++; 
    return num;
	}
}

let func = test();
console.log(func());