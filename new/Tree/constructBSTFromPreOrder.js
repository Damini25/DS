/**
 * Link- https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * T-O(N), S-O(n)
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    
    return buildTree(0, preorder.length-1);
    
    function buildTree(start, end){
        if(start>end)return null;
        
        let node = new TreeNode(preorder[start]);
        if(start===end) return node;
        start++;
        let i;
        for(i=start; i<=end; i++){
            if(preorder[i]>node.val){
                break;
            }
        }
        node.left = buildTree(start, i-1);
        node.right = buildTree(i, end);
        return node;
    }
};