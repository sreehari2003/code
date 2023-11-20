const rev = "iamsreehari";

let start = 0;
let end = rev.length;
let ans = [];
while (start < end) {
  let fir = rev[start];
  let las = rev[end];
  ans[start] = las;
  ans[end] = fir;
  start++;
  end--;
}

console.log(ans.join(""));
