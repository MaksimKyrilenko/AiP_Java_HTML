"use strict";
for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
	
	if (str[0] && str[1]) {
		console.log(i);
	}
}