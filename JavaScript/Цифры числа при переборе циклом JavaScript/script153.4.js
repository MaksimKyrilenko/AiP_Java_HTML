"use strict";
for (let i = 10; i <= 1000; i++) {
  let str = String(i); // преобразуем число в строку
  if (parseInt(str[0]) + parseInt(str[1]) == 5) {
    console.log(i);
  }
}
