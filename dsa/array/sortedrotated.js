var check = function (nums) {
  let largest = nums[0];
  let minimum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    largest = Math.max(largest, nums[i]);
    minimum = Math.min(minimum, nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === largest) {
      if (nums[i + 1] < nums[i] && nums[i + 1] !== minimum) {
        return false;
      }
    } else if (nums[i + 1] < nums[i]) {
      return false;
    }
  }

  return true;
};

check([1, 2, 3, 4]);
