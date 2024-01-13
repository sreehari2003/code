const b = ["hello"];
const mutate = (a) => {
  a[0] = "hi";
};

mutate(b);
// the result will be "hi"
console.log(b);
