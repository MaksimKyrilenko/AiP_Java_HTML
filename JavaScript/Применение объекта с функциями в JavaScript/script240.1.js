"use strict";
const calculator = {
	sum: function(arr) {
	  let sum = 0;
	  for (let num of arr) {
		sum += num;
	  }
	  return sum;
	},
	sumOfSquares: function(arr) {
	  let sumOfSquares = 0;
	  for (let num of arr) {
		sumOfSquares += num * num;
	  }
	  return sumOfSquares;
	},
	sumOfCubes: function(arr) {
	  let sumOfCubes = 0;
	  for (let num of arr) {
		sumOfCubes += num * num * num;
	  }
	  return sumOfCubes;
	}
  };
  const numbers = [1, 2, 3, 4, 5];
  console.log(calculator.sum(numbers)); 
  console.log(calculator.sumOfSquares(numbers));
  console.log(calculator.sumOfCubes(numbers)); 
  