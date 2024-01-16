function generateParenthesis(n: number): string[] {
  let t: Array<string> = [];
  const result: Array<string> = [];

  function dfs(open: number, closed: number): void {
    if (open === n && closed === n) {
      result.push(t.join(""));
      return;
    }
    if (open < n) {
      t.push("(");
      dfs(open + 1, closed);
      t.pop();
      console.log("POPPED", t);
    }
    if (open > closed) {
      t.push(")");
      dfs(open, closed + 1);
      t.pop();
      console.log("POPPED POPPED", t);
    }
  }

  dfs(0, 0);

  return result;
}

generateParenthesis(3);
