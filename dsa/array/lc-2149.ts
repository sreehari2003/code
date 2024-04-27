function rearrangeArray(nums: number[]): number[] {
  const pos = nums.filter((el) => el > 0);
  const neg = nums.filter((el) => el < 0);
  let p = 0;
  let n = 0;

  while (p + n < nums.length) {
    nums[p + n] = pos[p];
    p++;
    nums[n + p] = neg[n];
    n++;
  }
  return nums;
}

rearrangeArray([3, 1, -2, -5, 2, -4]);
