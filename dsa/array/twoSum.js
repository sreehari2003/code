const twoSum = (arr, target) => {
  const memo = {};

  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    const diff = target - t;
    if (t in memo) {
      return [memo[t], i];
    } else {
      memo[diff] = i;
    }
  }
};

const t = [1, 3, 5, 2];

console.log(twoSum(t, 7));
