const canSum = (target, numbers, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }
  if (target === 0) return true;
  if (target < 0) return false;

  for (let i of numbers) {
    const rem = target - i;

    memo[rem] = canSum(rem, numbers, memo);

    return memo[rem];
  }

  return false;
};

console.log(canSum(7, [2, 3, 5, 6]));
