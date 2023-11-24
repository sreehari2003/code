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

// 1->2->3->4->5->6->7
const preOrder = (node) => {
  if (!node) return;
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
};

preOrder(rootNode);
