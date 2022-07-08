/**
 * Link- https://leetcode.com/problems/diameter-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * T- O(n), s-O(n)
 */
var diameterOfBinaryTree = function(root) {
    let dia = 0;

    function findDia(root){
        if(!root || (!root.left && !root.right)) return 0;
        
        let lCount = 0, rCount=0;
        if(root.left){
            lCount+= findDia(root.left) + 1;
        }
         if(root.right){
            rCount+=findDia(root.right) + 1;
        }
        const depth =  Math.max(lCount, rCount);
        
        dia = Math.max(dia, lCount+rCount);
        
        return depth;
    } 
    
    findDia(root);
    
    return dia;
};