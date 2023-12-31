let words = ["abc", "aabc", "bc"];

let myMap = new Array(26).fill(0);
for (const s of words) {
  for (const c of s) {
    myMap[c.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
}
