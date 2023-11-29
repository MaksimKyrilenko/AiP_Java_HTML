"use strict";
function test(func1, func2, func3) {
	return func1(2, 3) + func2(2, 3) + func3(2, 3);
  }
  
  test(
	function(num1, num2) {
	  return num1 + num2;
	},
	function(num1, num2) {
	  return num1 + num2;
	},
	function(num1, num2) {
	  return num1 + num2;
	}
  ); 
  
  