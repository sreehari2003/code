// sum of n numbers

const sum = (n, t = 0) => {
  if (n == 0) return 0;
  return n + sum(n - 1);
};

console.log(sum(10));
