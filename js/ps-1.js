const qn = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b + c,
  },
  d: (a, b, c) => a - b - c,
};

const Fn = (obj) => {
  return function (...args) {
    for (let key in obj) {
      if (typeof obj[key] === "function") {
        obj[key] = obj[key](...args);
      }
      if (typeof obj[key] === "object") {
        Fn(obj[key])(...args);
      }
    }
    return obj;
  };
};

console.log(Fn(qn)(1, 2, 3));
