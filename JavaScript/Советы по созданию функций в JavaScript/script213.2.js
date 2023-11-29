"use strict";
// Недостаток кода заключается в том, что второй цикл for использует неправильное имя переменной (arr вместо arr2). Исправленный код:

function func(arr1, arr2) {
  let res1 = 0;
  
  for (let elem of arr1)
  { 
    res1 += elem;
  }
  
  let res2 = 0;
  
  for (let elem of arr2) 
  {
   res2 += elem;
  }
  
  return res1 / res2;
}