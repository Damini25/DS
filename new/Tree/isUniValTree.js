/**
 * Link- https://leetcode.com/problems/univalued-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * T/S- O(n)
 */
var isUnivalTree = function(root) {
    let curr= root;
    let map ={[root.val]:1}
    let stack = [];
    
    while(true){
        if(curr){
            if(!map[curr.val]) return false;
            stack.push(curr);
            curr=curr.left;
        }else{
            if(!stack.length) return true;
            const last = stack.pop();
            curr = last.right;
        }
    }
};