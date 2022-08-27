//T- O(n), S-O(1)
class Node {
    constructor(data) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.left.left = new Node(8);
  root.right.left.left.right = new Node(9);
  root.right.right = new Node(7);
  
  console.log("result", findDeepestNodeBinaryTree(root));
  
  function findDeepestNodeBinaryTree(root) {
    if (!root) return null;
  
    const _data = recur(root, 0);
    return _data.node;
  
    function recur(curr, level) {
      if (!curr.left && !curr.right) return { level, node: curr };
  
      let leftLevel = level,
        rightLevel = level;
      let leftLeaf, rightLeaf;
      if (curr.left) {
        const _data = recur(curr.left, level + 1);
        leftLeaf = _data.node;
        leftLevel = _data.level;
      }
      if (curr.right) {
        const _data = recur(curr.right, level + 1);
        rightLeaf = _data.node;
        rightLevel = _data.level;
      }
  
      if (leftLevel > rightLevel) {
        return { level: leftLevel, node: leftLeaf };
      } else {
        return { level: rightLevel, node: rightLeaf };
      }
    }
  }
  