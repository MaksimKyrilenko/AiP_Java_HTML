"use strict";
let month = 9;
let season;
if (month >= 1 && month <= 2 || month === 12) {
  season = 'зима';
} else if (month >= 3 && month <= 5) {
  season = 'весна';
} else if (month >= 6 && month <= 8) {
  season = 'лето';
} else {
  season = 'осень';
}
console.log(season);