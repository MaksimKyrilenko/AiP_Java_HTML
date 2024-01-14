"use strict";
let date1 = new Date(2000, 8, 1); 
let date2 = new Date(2010, 1, 15);

let diff = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24)); 
console.log(diff); 