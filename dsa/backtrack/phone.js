// Define the mapping of digits to letters
const k = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(d) {
  if (!d.length) return [];
  const res = [];

  const backtrack = (index, t = "") => {
    console.log(index, t);
    if (t.length === d.length) {
      res.push(t);
      return;
    }
    const curr = d[index];
    index++;

    for (let c of k[curr]) {
      backtrack(index, t + c);
    }
  };

  backtrack(0);

  return res;
}

letterCombinations("23");
