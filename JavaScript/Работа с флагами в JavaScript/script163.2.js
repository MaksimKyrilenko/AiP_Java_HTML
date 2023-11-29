"use strict";
let arr = [1, 2, 3, 4, 5];
let flag = false;
for (let elem of arr) {
	if (elem/elem && elem/1) {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}