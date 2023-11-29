"use strict";
"use strict";
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;
for (let elem in obj) {
  if (elem === "a" || elem === "b") {
    sum = sum + obj[elem];
  }
}
console.log(sum);

