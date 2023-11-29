"use strict";
// Недостаток кода заключается в отсутствии проверки на входные данные. Функция может некорректно работать, если в качестве аргумента будет передан не массив. Исправленный код:

function sum(arr) {
  if (!Array.isArray(arr))
  { 
    return "Error: input is not an array";
  }
  let res = 0;
  
  for (let elem of arr) 
  {
    res += elem;
  }
  
  return res / arr.length;
}