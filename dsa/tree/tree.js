class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

const tree = new Node(4);

tree.left = new Node(1);
tree.right = new Node(2);
tree.left.left = new Node(3);
tree.left.left.right = new Node(6);
tree.left.left.left = new Node(5);
tree.right.right = new Node(7);
tree.right.right.right = new Node(9);

/*o
        4
    1       2
3       6        7
    5                9

*/

// pre order
function dfs(node) {
  let res = [];
  function traverse(node) {
    if (node) {
      res.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }
  }
  traverse(node);
  return res;
}

console.log(dfs(tree));
