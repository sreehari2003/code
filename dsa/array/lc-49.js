/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dict = {};
  for (let el of strs) {
    const sortedStr = el.split("").sort().join("");
    if (sortedStr in dict) {
      dict[sortedStr].push(el);
    } else {
      dict[sortedStr] = [el];
    }
  }
  console.log(Object.values(dict));
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
