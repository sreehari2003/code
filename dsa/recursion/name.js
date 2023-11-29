// print name 5 times recurviely
const name = (n) => {
  if (n == 0) {
    return;
  } else {
    console.log("sreehari");
    name(n - 1);
  }
};

name(5);
