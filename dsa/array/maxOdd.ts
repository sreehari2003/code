const isOdd = (el) => {
  return parseInt(el, 10) % 2 !== 0;
};

function largestOddNumber(num: string): string {
  let max = "";
  let point = num.length - 1;

  while (point >= 0) {
    let c = num.slice(0, point + 1);

    const odd = isOdd(c);

    if (odd) {
      if (Number(c) > Number(max)) {
        max = c;
      }
    }
    point--;
  }

  return max;
}

console.log(largestOddNumber("239537672423884969653287101"));
