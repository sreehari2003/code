var largestPerimeter = function (nums) {
  if (nums.length < 3) {
    return -1;
  }

  nums.sort((a, b) => b - a); // Sorting in descending order

  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = dp[i - 1] + nums[i];
  }

  for (let i = nums.length - 1; i >= 1; i--) {
    if (dp[i - 1] >= nums[i]) {
      // Return the perimeter excluding the current side
      return dp[i - 1];
    }
  }

  return -1;
};

largestPerimeter([1, 12, 1, 2, 5, 50, 3]);
