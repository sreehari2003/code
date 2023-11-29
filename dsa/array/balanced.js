const balanced = (expression, replacement) => {
  if (expression.length !== replacement.length) {
    return false;
  }

  const results = [];

  for (let i = 0; i < expression.length; i++) {
    let t = [];
    let count = 0;
    let k = expression[i].split("");

    for (let j = 0; j < k.length; j++) {
      console.log(k[j], results);
      if (k[j] === "<") {
        t.push("<");
      } else {
        if (t.length > 0) {
          t.pop();
        } else {
          // Replace ">" with "<>"
          if (replacement[i] > 0) {
            count++;
            replacement[i]--;
          }
        }
      }
    }

    // If the expression is balanced, and replacements are used up
    results.push(t.length === 0 && count === 0 ? 1 : 0);
  }
  return results;
};

const test = ["<<>>", "<>", "<><>", ">>", "<<>", "><><"];
const rep = [0, 1, 2, 2, 2, 2];

balanced(test, rep);
