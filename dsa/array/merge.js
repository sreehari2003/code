const mergeSort = (arr, low, high) => {
  if (low >= high) {
    return;
  }
  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
};

const merge = (arr, low, mid, high) => {
  const t = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      t.push(arr[left]);
      left++;
    } else {
      t.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    t.push(arr[left]);
    left++;
  }
  while (right <= high) {
    t.push(arr[right]);
    right++;
  }
  for (let i = 0; i < t.length; i++) {
    arr[low + i] = t[i];
  }
};
const j = [3, 2, 4, 1, 3];
mergeSort(j, 0, 4);

console.log(j);
