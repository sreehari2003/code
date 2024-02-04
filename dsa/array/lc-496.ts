function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];

  const info = {};

  for (let i = 0; i < nums2.length; i++) {
    const t = nums2[i];
    info[t] = i;
  }

  for (let i = 0; i < nums1.length; i++) {
    const loc = info[nums1[i]] as number;
    for (let j = loc + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res.push(nums2[j]);
        break;
      } else {
        if (j === nums2.length - 1) {
          res.push(-1);
        }
      }
    }
  }
  console.log(res);

  return res;
}

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
