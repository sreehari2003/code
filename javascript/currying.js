const addMul = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(addMul(1)(2)(3));
