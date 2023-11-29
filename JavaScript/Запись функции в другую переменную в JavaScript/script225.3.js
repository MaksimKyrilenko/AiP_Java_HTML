"use strict";
function func1() {
	return 3;
}

let func2 = func1; 
func1();
func2();
console.log(func2() + func1())