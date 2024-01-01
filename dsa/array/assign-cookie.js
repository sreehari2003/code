/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  if (g.length === 0 || s.length === 0) return 0;

  let i = 0;
  let j = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      i++;
    }

    j++;
  }

  return i;
};
