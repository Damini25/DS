/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * T-O(N)
 * S-O(N)
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;
    if(!root.left && !root.right) return root;
    
    let tempL = root.left;
    let tempR = root.right;
    
    root.left = tempR;
    root.right = tempL;
    
    if(root.left){
        invertTree(root.left);
    }
    if(root.right){
        invertTree(root.right);
    }
    
    return root;
};