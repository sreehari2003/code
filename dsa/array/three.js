var threeSum = function (nums) {
  let res = [];
  nums.sort();
  let end = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    while (j < end) {
      let sum = nums[i] + nums[j] + nums[end];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[end]]);
        end--;
        j++;
      } else if (sum > 0) {
        end--;
      } else {
        j++;
      }
    }
  }
  return res;
};
threeSum([-1, 0, 1, 2, -1, -4]);
