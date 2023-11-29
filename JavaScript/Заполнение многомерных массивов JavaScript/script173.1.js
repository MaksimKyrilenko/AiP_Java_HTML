"use strict";
let arr = [];

for (let i = 0; i < 5; i++) {
	arr[i] = []; 
	
	for (let j = 0; j < 5; j++) {
		arr[i].push(j + 1);
	}
}

console.log(arr);