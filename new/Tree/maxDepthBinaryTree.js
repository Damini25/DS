/**
 * Link- https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * T-O(n), S-O(n)
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    
    let lCount = 1;
    let rCount = 1;
    if(root.left){
        lCount+=maxDepth(root.left);
    }
    if(root.right){
        rCount+=maxDepth(root.right);
    }
    return Math.max(lCount, rCount);
};