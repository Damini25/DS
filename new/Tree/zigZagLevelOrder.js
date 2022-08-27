/**
 * Link- https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * T- O(n)
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    
    let q = [root];
    let levelOrder = [];
    let result= [];
    let flag = false;
    
    while(q.length){
        const size = q.length;
        let temp = []; 
        for(let i=0;i<size;i++){
            const curr = q.shift();
            if(curr) {
                temp.push(curr.val);
            }
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        if(temp.length){
            if(!flag){
                result.push(temp);
            }else{
                temp.reverse();
                result.push(temp);
            }
        }
        flag= !flag;
    }
    
    return result;
};