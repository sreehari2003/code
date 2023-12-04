const twoSum = (arr, target) => {
  const dict = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    let t = arr[i];
    if (t in dict) {
      return [dict[t], i];
    } else {
      dict[diff] = i;
    }
  }
};

/*
  {
   4:
  }

*/

console.log(twoSum([1, 2, 3, 4, 6], 10));
