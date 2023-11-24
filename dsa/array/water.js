function maxArea(height) {
  let maximum = 0;
  let end = height.length - 1;
  let start = 0;
  while (start < end) {
    let m = Math.min(height[start], height[end]);
    let b = end - start;
    maximum = Math.max(maximum, m * b);
    if (height[start] > height[end]) {
      end--;
    } else {
      start++;
    }
  }

  return maximum;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
