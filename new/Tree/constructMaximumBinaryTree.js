/**
 * Link- https://leetcode.com/problems/maximum-binary-tree/
 * T- O(n^2) S- O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let max = -Infinity, maxInd = -1;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] > max){
            max = nums[i];
            maxInd = i;
        }
    }
    
    let root = new TreeNode(max, null, null);
   
    const leftArr = nums.slice(0,maxInd);
    const rightArr = nums.slice(maxInd+1);
    if(leftArr.length){
        root.left = constructMaximumBinaryTree(leftArr);
    }
    if(rightArr.length){
        root.right = constructMaximumBinaryTree(rightArr);
    } 
    
     return root;
};