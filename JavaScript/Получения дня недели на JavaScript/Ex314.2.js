"use strict";
let date = new Date();
let dayOfWeek = date.getDay();
let isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
console.log(isWeekend ? 'Выходной' : 'Рабочий день');

