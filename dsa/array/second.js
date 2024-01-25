const second = (arr) => {
  let high = Number.MIN_SAFE_INTEGER;
  let small = Number.MIN_SAFE_INTEGER;

  for (let i of arr) {
    if (i > high) {
      small = high;
      high = i;
    } else if (i < high && i > small) {
      small = i;
    }
  }

  console.log(small);
};

second([1, 2, 3, 4, 5, 2, 4, 2, 4, 6, 1, 2, 3, 4, 6, 778]);
