Array.prototype.myFlat = function () {
  const array = [];

  const iterate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object") {
        iterate(arr[i]);
      } else {
        array.push(arr[i]);
      }
    }
  };

  iterate(this);

  return array;
};

const test = [1, 2, 3, [4, 5, [6, 7, [8, 9, 6]]]];

console.log(test.myFlat());
