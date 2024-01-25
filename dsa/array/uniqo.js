function uniqueOccurrences(arr) {
  const memo = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in memo) {
      memo[arr[i]] = memo[arr[i]] + 1;
    } else {
      memo[arr[i]] = 1;
    }
  }

  const s = new Set([]);

  console.log(memo);

  for (let val in memo) {
    const t = memo[val];

    if (s.has(t)) return false;
    else s.add(t);
  }

  return true;
}

uniqueOccurrences([1, 2]);
