/**
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @return {boolean}
 */
function haveCommonCharacter(arr1, arr2) {
  const set1 = new Set(arr1.join(""));
  console.log(set1);

  for (let str of arr2) {
    for (let char of str) {
      if (set1.has(char)) {
        return true; // Common character found
      }
    }
  }

  return false; // No common character found
}

const array1 = ["ab", "cd", "ef"];
const array2 = ["af", "ee", "ef"];

const result = haveCommonCharacter(array1, array2);

console.log(result); // Output: true
