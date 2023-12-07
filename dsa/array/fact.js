const factorial = (n) => {
  let ans = 1;

  for (let i = 2; i <= n; i++) {
    ans = ans * i;
  }
};

factorial(10);
