"use strict";
let func = (function() {
	let num = 1;
	
	return function() {
	  console.log(num);
	  num = (num % 5) + 1;
	}
  })();
  
  func(); 
  func(); 
  func(); 
  func(); 
  func(); 
  func(); 
  func(); 

  