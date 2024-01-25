function maximumSubarraySum(nums: number[], k: number): number {
  let res = 0;
  let box: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (!box.includes(current) && box.length < k) {
      box.push(current);
    } else {
      console.log(box);
      res = Math.max(res, sum(box));
      box.shift(); // Remove the first element to maintain the sliding window size.
      box.push(current);
    }
  }

  return res;
}

const sum = (arr: number[]): number => {
  return arr.reduce((el, def) => el + def, 0);
};

maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3);
