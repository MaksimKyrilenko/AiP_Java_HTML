function func(num1) {
  let arr = [num1];
  
  function innerFunc(num) {
    if (num !== undefined) {
      arr.push(num);
      return innerFunc;
    } else {
      return arr;
    }
  }
  
  return innerFunc;
}

console.log( func(2)(3)(4)(5)() );