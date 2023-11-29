"use strict";
let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
}
let sum = Object.values(obj).reduce((acc, curr) => {
  if (typeof curr === 'object') {
    return acc + Object.values(curr).reduce((a, c) => a + c, 0);
  }
  return acc + curr;
}, 0);

console.log(sum);

