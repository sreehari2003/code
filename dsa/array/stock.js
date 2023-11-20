function maxProfit(prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i <= prices.length - 1; i++) {
    min = Math.min(min, prices[i]);
    let p = prices[i] - min;
    profit = Math.max(p, profit);
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
