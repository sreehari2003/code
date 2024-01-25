function longestPalindrome(s: string): string {
  if (s.length === 1) return s;
  const dp = {};

  let j = "";
  function backtrack(index: number, t = [] as string[]) {
    if (index > s.length - 1) {
      let ans = isPal(t);
      dp[t.join("")] = ans;
      console.log(t, ans);
      if (ans) {
        if (t.join("").length > j.length) {
          j = t.join("");
        }
      }
      return;
    } else {
      t.push(s[index]);
      index++;
      backtrack(index, t);
      t.pop();
      backtrack(index, t);
    }
  }
  backtrack(0);
  console.log(j);
  return j;
}

const isPal = (arr: string[]): boolean => {
  let t = arr;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if (t[start] !== t[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

longestPalindrome("aacabdkacaa");
