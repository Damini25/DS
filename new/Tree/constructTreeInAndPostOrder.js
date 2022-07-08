/**
 * Link- https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * T- O(N)
 * S- O(N)
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let map = {};
    
    for(let i=0;i<inorder.length;i++){
        map[inorder[i]]=i;
    }
    
    return build(postorder.length-1, 0, 0, inorder.length-1);
    
    function build(postStart, postEnd, inStart,inEnd){
        if(postStart < postEnd || postStart<0) return null;
        
        const node = new TreeNode(postorder[postStart]);
        if(postStart===postEnd) return node;
        
        const ind = map[postorder[postStart]];
        const offSet= inEnd-ind;
        
        node.left = build(postStart-offSet-1, postEnd, inStart, ind-1);
        node.right = build(postStart-1, postStart-offSet, ind+1, inEnd);
        return node;
    }
};