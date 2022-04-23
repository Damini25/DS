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
 * @return {number[][]}
 * Input: root = [1,2,3,4,5]
Output: [[4,5,3],[2],[1]]
 */
var findLeaves = function(root) {
    let result = [];
    while(root){
        let leavesArr=[];
        root = inOrderTraversal(root, leavesArr);
        result.push(leavesArr);
    }
    return result;
};

var inOrderTraversal = (curr, leavesArr)=>{ 
      if(!curr.left && !curr.right) {
           leavesArr.push(curr.val);
           return null;
     }
       if(curr.left){
          curr.left = inOrderTraversal(curr.left, leavesArr);
       }
       if(curr.right){
          curr.right = inOrderTraversal(curr.right, leavesArr);
       }
    return curr;
}