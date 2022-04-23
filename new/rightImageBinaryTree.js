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
 * Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
 */
var rightSideView = function(root) {
    if(!root) return [];
    let q=[root]; let lOrder=[];
    while(q.length){
        let size = q.length;
        for(let i=0;i<size;i++){
            let c = q.shift();
            if(i===size-1) lOrder.push(c.val);
            if(c.left) q.push(c.left);
            if(c.right) q.push(c.right);
        }
    }
    return lOrder;
};