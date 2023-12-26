var threeSum = function (nums) {
  let m = new Map();
  const out = [];
  nums.sort((a, b) => a - b);
  let size = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j < size) {
      if (nums[i] > 0 && nums[i] === nums[i - 1]) continue;
      let sum = nums[i] + nums[j] + nums[size];
      if (sum === 0) {
        let t = `${nums[i]},${nums[j]},${nums[size]}`;
        if (!m.get(t)) {
          out.push([nums[i], nums[j], nums[size]]);
          m.set(t, 1);
        }
        size--;
        j++;
      } else if (sum > 0) {
        size--;
      } else {
        j++;
      }
    }
  }
  return out;
};
threeSum([-2, 0, 0, 2, 2]);
