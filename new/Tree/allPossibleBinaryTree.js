/**
 * Link- https://leetcode.com/problems/all-possible-full-binary-trees/
 * T- O(2^n)
 * S - O(2^n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if(n%2===0) return [];
     
    let list = [];
    list[1] = [new TreeNode(0)];
     
     for(i=3; i<=n; i+=2){
         let trees =[]
         for(j=1; j<=i-2; j+=2){
             
             list[j].forEach((leftVal)=>{
                 list[i-1-j].forEach((rightVal)=>{
                     trees.push(new TreeNode(0, leftVal, rightVal))
                 })
             })
         }
         list[i]= trees;
     }
     return list[n];
 };