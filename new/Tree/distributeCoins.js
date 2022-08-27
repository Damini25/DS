/**
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
 * T- O(n), S- O(n)
 */
var distributeCoins = function(root) {
    let moves = 0;
    
    dfs(root);
    
    function dfs(curr){
        if(!curr) return 0;
        const L = dfs(curr.left);
        const R = dfs(curr.right);
        moves += Math.abs(L) + Math.abs(R);
        return curr.val + L + R - 1;
    }
    
    return moves;
};