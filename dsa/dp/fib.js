var fib = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 1;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

fib(4);
