"use strict";
let date = new Date(2024, 11, 6); 
	
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 
	'чт', 'пт', 'сб']; 

console.log(days[day]);