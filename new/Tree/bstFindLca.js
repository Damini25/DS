/**
 * Link- https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * T- O(n), s- O(1)
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let curr = root;
    let v1,v2;
    if(p.val<q.val){
        v1=p.val; v2=q.val;
    }else{
        v1=q.val; v2=p.val;
    }
    
    while(curr){
        if(v1 < curr.val && v2 > curr.val) return curr;
        if(v1 === curr.val || v2 === curr.val) return curr;
        
        if(v1 < curr.val && v2 < curr.val){
            curr = curr.left;
        }else{
            curr = curr.right;
        }
    }
    
};