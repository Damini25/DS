/**
 * Link-https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * T-O(n), S-O(1)
 * 
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    if(!root) return root;
     
    let temp = 0;
    
    rightOrderTraversal(root);
    
    return root;
    
    
    function rightOrderTraversal(curr){
        if(!curr) return;
        
        if(curr.right){
           rightOrderTraversal(curr.right);
        }
        
        curr.val+=temp;
        temp=curr.val;
        
        if(curr.left){
            rightOrderTraversal(curr.left);
        }
    }
    
};