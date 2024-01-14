"use strict";
let date1 = new Date(2000, 8, 1); 
let date2 = new Date(2010, 1, 15); 

let diffYears = date2.getFullYear() - date1.getFullYear(); 
let diffMonths = date2.getMonth() - date1.getMonth(); 

let totalDiff = diffYears * 12 + diffMonths; 

console.log(totalDiff);