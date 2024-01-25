const t = [73, 74, 75, 71, 69, 72, 76, 73];

function dailyTemperatures(temperatures) {
  const res = [];

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j <= temperatures.length; j++) {
      console.log(temperatures[i], temperatures[j], i, j);
      if (temperatures[j] > temperatures[i]) {
        res.push(j - i);
        break;
      }
      if (j === temperatures.length) {
        res.push(0);
      }
    }
  }
  console.log("result", res);
  return res;
}

dailyTemperatures(t);
