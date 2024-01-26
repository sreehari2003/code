const sum = (t: number[]) => t.reduce((el, j) => el + j, 0);

// same can be used for LC-560
function numSubarraysWithSum(nums: number[], goal: number): number {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      console.log(j);
      currentSum += nums[j];

      if (currentSum === goal) {
        res++;
      }
    }
  }

  return res;
}

numSubarraysWithSum([1, 0, 1, 0, 1], 2);
