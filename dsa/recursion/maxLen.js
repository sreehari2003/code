function maxLength(arr) {
  let len = 0;

  const backtrack = (index, t = []) => {
    if (index > arr.length - 1) {
      console.log(t);
      len = Math.max(t.join("").length, len);
      return;
    } else {
      t.push(arr[index]);
      index++;
      backtrack(index, t);
      t.pop();
      backtrack(index, t);
    }
  };
  backtrack(0);

  return len;
}

console.log(["cha", "r", "act", "ers"]);
