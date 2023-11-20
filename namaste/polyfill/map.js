let test = [1, 2, 3, 5];

Array.prototype.myMap = function (callBack) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(callBack(this[i], i, this));
  }

  return res;
};

test.myMap((el) => {
  console.log(el);
});
