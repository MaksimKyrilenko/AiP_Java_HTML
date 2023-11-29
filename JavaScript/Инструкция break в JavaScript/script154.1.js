"use strict";
let arr = [1, 2, 0, 4, 5];

for (let elem of arr) {
	if (elem == 0) {
		console.log('0 появился');
		break;
	}
}