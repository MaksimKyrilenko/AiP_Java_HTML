let arr = [1, 2, 3, 4, 5];
let position;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    position = i;
    break;
  }
}
console.log(position);