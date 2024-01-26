function lengthOfLongestSubstring(s: string): number {
  let res = 0;
  let end = 0;

  const box: string[] = [];
  while (end < s.length) {
    if (box.includes(s[end])) {
      box.shift();
    } else {
      box.push(s[end]);
      res = Math.max(res, box.length);
      end++;
    }
  }
  return res;
}
