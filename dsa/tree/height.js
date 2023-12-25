class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Creating nodes
const rootNode = new Node(1);
const leftNode = new Node(2);
const rightNode = new Node(3);

// Connecting nodes
rootNode.left = leftNode;
rootNode.right = rightNode;

// Adding more nodes
leftNode.left = new Node(4);
leftNode.right = new Node(5);
rightNode.left = new Node(6);
rightNode.right = new Node(7);

// The binary tree looks like this:
//       1
//      / \
//     2   3
//    / \ / \
//   4  5 6  7

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let q = [root];
  let h = 0;

  while (q.length !== 0) {
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let node = q.shift();

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }

    h++;
  }

  return h;
};

// var maxSum = (root) => {
//   if (!root) {
//     return null;
//   }
//   let sum = 0;

//   while (root) {
//     sum += root.value;
//     // Choose the next node based on the maximum value between left and right children.
//     const next =
//       root.left && root.right
//         ? root.left.value > root.right.value
//           ? root.left
//           : root.right
//         : root.left
//         ? root.left
//         : root.right;

//     root = next;
//   }

//   console.log(sum);
// };

// maxSum(rootNode);

var maxSum = (root) => {
  if (!root) {
    return 0;
  }

  const s = root.value + Math.max(maxSum(root.left), maxSum(root.right));

  return s;
};

console.log(maxSum(rootNode));
