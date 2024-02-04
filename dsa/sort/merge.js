const t = [1, 4, 6, 5, 3, 2];

const mergeSort = (arr, low, high) => {
  if (low >= high) return -1;

  const mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
};

const merge = (arr, low, mid, high) => {
  const temp = [];
  const right = mid + 1;

  while (low < mid && right < high) {
    if (arr[low] <= arr[right]) {
      temp.push(arr[right]);
      low++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
};
