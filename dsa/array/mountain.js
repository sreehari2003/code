const mountai = (mountain) => {
  let peak = [];
  for (let i = 1; i < mountain.length; i++) {
    if (i == 1) {
      if (mountain[i] > mountain[0] && mountain[i] > mountain[i + 1]) {
        peak.push(i);
      }
    } else if (
      mountain[i] > mountain[i + 1] &&
      mountain[i] > mountain[mountain.length]
    ) {
      peak.push(i);
    } else if (mountain[i] > mountain[i + 1] && mountain[i] > mountain[i - 1]) {
      peak.push(i);
    }
  }

  return peak;
};

mountainountain([1, 4, 3, 8, 5]);
