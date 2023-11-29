"use strict";
function func() {
	return 3;
}

let func1 = func; 
func();
func1();
console.log(func1())