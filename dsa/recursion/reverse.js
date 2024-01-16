// const reverse = (s) => {
//   let end = s.length - 1;
//   let start = 0;

//   const t = s.split("");

//   while (start < end) {
//     const x = t[start];
//     t[start] = t[end];
//     t[end] = x;
//     start++;
//     end--;
//   }

//   console.log(t.join());
// };

const reverse = (s) => {
  if (s === "") {
    return s;
  }
  console.log(s);
  return reverse(s.substr(1)) + s[0];
};

console.log(reverse("hello"));
