const balanced = (expression, replacement) => {
  if (expression.length !== replacement.length) {
    return false;
  }

  for (let i = 0; i < expression.length; i++) {
    let t = [];
    let count = 0;
    let k = expression[i].split("");
    for (let j = 0; j < k.length; j++) {
      if (k[j] === "<") {
        t.push();
      } else {
        count++;
        t.pop();
      }
    }
    console.log(count);
  }
};
// if it is replacable i want to make it 1 else 0

const test = ["<<>>", "<>", "<><>", ">>", "<<>", "><><"];
const rep = [0, 1, 2, 2, 2, 2];

balanced(test, rep);
