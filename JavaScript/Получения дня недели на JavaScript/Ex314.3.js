"use strict";
let date = new Date();
let dayOfWeek = date.getDay();
let daysUntilSunday = 0;
if (dayOfWeek !== 0) {
  daysUntilSunday = 7 - dayOfWeek;
}
console.log(`До ближайшего воскресенья осталось ${daysUntilSunday} дней`);
