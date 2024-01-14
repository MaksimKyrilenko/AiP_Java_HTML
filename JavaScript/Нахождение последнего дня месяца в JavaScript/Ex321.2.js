"use strict";
let date = new Date(2023, 31, 5); 
	
let day = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);