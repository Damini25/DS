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
 * @return {number[]}
 * Input: root = [1,2,3,null,4]
Output: [4]
 */
var getLonelyNodes = function(root) {
    let q= [root];let res =[];
    while(q.length){
        let curr = q.shift();
        let childs =[];
        if(curr.left){
            q.push(curr.left);
            childs.push(curr.left.val);
        }
        if(curr.right){
            q.push(curr.right);
            childs.push(curr.right.val);
        }
        if(childs.length===1) res.push(childs[0]);
    }
    return res;
};