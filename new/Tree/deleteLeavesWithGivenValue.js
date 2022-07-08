/**
 * 
 * Link-https://leetcode.com/problems/delete-leaves-with-a-given-value/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 * T- O(N), S-O(1)
 */
var removeLeafNodes = function(root, target) {
    if(root.left){
        if(!removeLeafNodes(root.left, target)){
            root.left=null;
        }
    }
    if(root.right){
        if(!removeLeafNodes(root.right, target)){
            root.right=null;
        }
    }
    
    if(!root.left && !root.right && root.val == target){
        return null;
    }
    return root;
}