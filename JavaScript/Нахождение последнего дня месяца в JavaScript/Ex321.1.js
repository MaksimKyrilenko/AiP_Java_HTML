"use strict";
let date = new Date(2021, 3, 0);
console.log(date.getDate(date));

function getLastDay() {
    let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month !== 1) {
        return lastDays[month]; 
    } else {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29; 
        } else {
            return 28; 
        }
    }
}