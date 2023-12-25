const subs = (index, t = [], arr) => {
  if (index > arr.length - 1) {
    console.log(t);
    return;
  } else {
    t.push(arr[index]);
    index++;
    subs(index, t, arr);
    // [3,1,2]
    console.log("call stack", index, t, arr);

    t.pop();
    subs(index, t, arr);
  }
};

const a = [3, 1, 2];

subs(0, [], a);
