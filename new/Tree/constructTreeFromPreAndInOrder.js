/**
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map={};
    
    for(let i=0; i<inorder.length; i++){
        map[inorder[i]] = i;
    }
    return build(0,preorder.length-1, 0, inorder.length-1);
    
    function build(preStart, preEnd, inStart, inEnd){
        if(preStart>preEnd) return null;
        
        let node = new TreeNode(preorder[preStart]);
        if(preStart === preEnd) return node;
        
        const ind = map[preorder[preStart]];
        const offset = ind-inStart;
        
        node.left = build(preStart+1, preStart+offset, inStart, ind);
        node.right = build(preStart+offset+1, preEnd, ind+1, inEnd);
        
        return node;
    }
};