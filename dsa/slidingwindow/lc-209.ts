function minSubArrayLen(target: number, nums: number[]): number {
  let res = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let curr = 0;

  for (let end = 0; end < nums.length; end++) {
    curr += nums[end];

    while (curr >= target) {
      res = Math.min(res, end - start + 1);
      curr -= nums[start];
      start++;
    }
  }

  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
