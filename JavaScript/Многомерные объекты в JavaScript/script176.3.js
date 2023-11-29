"use strict";
let obj = {
  key1: {
    a: 1, b: 2, c: {
      d: 3,
      e: 4,
    }, f: 5,
  },
  key2: {
    g: 6, h: 7,
  },
}

let sum = 0;

function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

function processObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      if (isNumber(value)) {
        sum += value;
      } else if (typeof value === 'object') {
        processObject(value);
      }
    }
  }
}

processObject(obj);

console.log(sum);

