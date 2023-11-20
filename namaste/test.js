const obj = {
  a: "hari",
  age: 20,
};

console.log({
  ...obj,
  name: "okok",
});

obj.res = "hhihi";

console.log(obj);
