function maxSlidingWindow(nums: number[], k: number): number[] {
  let top: number[] = [];
  const box: number[] = [];

  //   for (let i = 0; i < nums.length; i++) {
  //     const curr = nums[i];
  //     if (box.length < k) {
  //       box.push(curr);
  //       if (box.length === k) {
  //         const high = Math.max(...box);
  //         top.push(high);
  //       }
  //     } else {
  //       box.shift();
  //       box.push(curr);
  //       const high = Math.max(...box);
  //       top.push(high);
  //     }
  //   }

  let l = 0;
  let r = 0;
  while (r < nums.length) {
    while (box.length > 0 && nums[box[-1]] < nums[r]) {
      box.pop();
    }
    box.push(r);
  }

  return top;
}

maxSlidingWindow([1, -1], 2);
