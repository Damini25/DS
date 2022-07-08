/**
 * Link- https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let map ={};
    
    for(let i=0;i<postorder.length;i++){
        map[postorder[i]]=i;
    }
    return buildTree(0,preorder.length-1, 0, postorder.length-1);
    
    function buildTree(preStart, preEnd, postStart, postEnd){
        
        if(preStart>preEnd) return null;
        
        let node = new TreeNode(preorder[preStart]);
        
        if(preStart === preEnd){
            return node;
        }
        
        preStart++;
        
        const ind = map[preorder[preStart]];
        const offset = ind-postStart;
        
        node.left = buildTree(preStart, preStart+offset, postStart, ind);
        node.right = buildTree(preStart+offset+1, preEnd, ind+1, postEnd-1);
        
        return node;
    }
    
};