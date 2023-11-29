"use strict";
function test(func1, func2, func3) {
	return func1(3) + func2(3) + func3(3);
  }
  
  test(
	function(num) {
	  return num ** 3;
	}
  );
  