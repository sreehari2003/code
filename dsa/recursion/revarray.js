const reverse = (arr, t = []) => {
  if (arr.length > 0) {
    t.push(arr[arr.length - 1]);
    reverse(arr.slice(0, arr.length - 1), t);
  } else {
    console.log(t);
  }
};

reverse([1, 2, 3, 4, 5]);
