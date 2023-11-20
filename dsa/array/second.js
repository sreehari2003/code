const arra = [3, 4, 5, 2, 6, 7];

// time compexity O(n log n)
// const secondLarge = (array) => {
//   array.sort();

//   return array[array.length - 2];
// };

// console.log(secondLarge(arra));

function secondLarge(array) {
  let top = array[0];
  let second = array[0];

  // find the largest of array
  for (let i = 0; i < array.length; i++) {
    top = Math.max(array[i], top);
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > second && array[i] < top) {
      second = array[i];
    }
  }

  return second;
}

console.log(secondLarge(arra));
