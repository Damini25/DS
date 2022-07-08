/**
 * Link- https://leetcode.com/problems/binary-search-tree-iterator/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.inOrder = []; 
    this.pt = 0;
    const stack=[];
    let curr = root;
    while(true){
          if(curr){
            stack.push(curr);
            curr=curr.left;
          }else{
              if(!stack.length) break;
              let last = stack.pop();
              this.inOrder.push(last);
              curr=last.right;
          }
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let toReturn = null;
    if(this.pt<this.inOrder.length){
        toReturn = this.inOrder[this.pt];
    }
    this.pt++;
    return toReturn.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.pt<this.inOrder.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */