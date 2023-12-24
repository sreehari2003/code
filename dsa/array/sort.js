const t = [
  [2, 1, 5],
  [3, 3, 7],
];

const carPool = (trips, cap) => {
  t.sort((a, b) => a[1] - b[1]);
  // current passenger
  const curr = 0;
  const minHeap = []; // [end,numPass]

  for (let i = 0; i < trips.length; i++) {
    [pass, from, to] = i;
  }
};

carPool(t, 4);
