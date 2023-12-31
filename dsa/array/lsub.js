/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const m = new Map();
  let maxSize = -1;

  for (let i = 0; i < s.length; i++) {
    let t = s[i];
    if (m.get(t)) {
      let ar = m.get(t);
      ar.push(i);
      m.set(t, ar);
    } else {
      m.set(t, [i]);
    }
  }
  for (const [key, value] of m.entries()) {
    if (value.length > 0) {
      let k = value[value.length - 1] - value[0];
      maxSize = Math.max(maxSize, k - 1);
    }
  }

  return maxSize;
};

maxLengthBetweenEqualCharacters("scayofdzca");
