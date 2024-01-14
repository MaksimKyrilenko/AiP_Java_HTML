"use strict";
let options = {
	width:  400,
	height: 500,
};
let {width, height} = options;

let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}

console.log(width);  
console.log(height); 
console.log(color);   
