const nextNum = (num = 0) => {
  let total = num;
  const next = (n) => {
    if (n === undefined) return total;
    total += n;
    return next;
  };

  return next;
};

console.log(nextNum(1)(2)(3)());

// function addNumbers(initialValue = 0) {
//   let sum = initialValue;

//   function addNextNumber(nextValue) {
//     if (nextValue === undefined) {
//       return sum;
//     }

//     sum += nextValue;
//     return addNextNumber;
//   }

//   return addNextNumber;
// }

// // Example usage:
// const result = addNumbers(1)(2)(3)(); // Returns 6
// console.log(result);
