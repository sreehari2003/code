const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// spiral matrix
const traverseMatrix = (matrix) => {
  const leng = matrix.length;
  const subLen = matrix[0].length;
  let ans = [];
  for (let i = 0; i < leng; i++) {
    if (i % 2 !== 0) {
      for (let j = subLen - 1; j > 0; j--) {
        ans.push(matrix[i][j]);
      }
    } else {
      for (let j = 0; j < subLen; j++) {
        ans.push(matrix[i][j]);
      }
    }
  }
  return ans;
};

console.log(traverseMatrix(mat));
