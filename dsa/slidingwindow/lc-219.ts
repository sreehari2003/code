function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const s = new Set();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (s.has(curr)) return true;
    s.add(curr);
    if (s.size > k) {
      s.delete(nums[i - k]);
    }
  }

  return false;
}

containsNearbyDuplicate([1, 2, 3, 1], 3);
