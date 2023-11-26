class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        // Value already exists in the tree
        return undefined;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;

    while (current) {
      if (value === current.value) {
        return current;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }
}

// Example usage:
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);

//          10
//         /  \
//       5    15
//       / \   / \
//     3   7 12  17
const isValidBst = (
  node,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) => {
  if (!node) return true;
  if (node.val <= min || node.val >= max) return false;

  return (
    isValidBst(node.left, min, node.val) &&
    isValidBst(node.right, node.val, max)
  );
};

console.log(isValidBst(bst));
