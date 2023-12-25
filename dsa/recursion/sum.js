// sum of n numbers

const sum = (n, t = 0) => {
  if (n == 0) return 0;
  return n + sum(n - 1);
};

/*
    call stack
  -> 3 + sum(2)
  -> 2 + sum(1)
  -> 1 + sum(0) -> 1+ 0= 1
  <- back track
  <- 2 + 1
  <- 3 + 3
   = 6  
*/

console.log(sum(3));
