/**
 * Link- https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * T- O(N), S-O(N)
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    if(!root) return [];
    let res=[];
    let parents={};
    const visited ={};
    findParents(root);
    findDescDist(target,0);
    return res;
    
    function findDescDist(curr, dist){
        if(dist>k || !curr) return;
        
        if(visited.hasOwnProperty(curr.val)) return;
        
        visited[curr.val]=1
        if(dist === k) {
            res.push(curr.val);
            return;
        }
        if(curr.left){
            findDescDist(curr.left, dist+1);
        }
        if(curr.right){
            findDescDist(curr.right, dist+1);
        }
        
        findDescDist(parents[curr.val], dist+1);
    }
  
    function findParents(curr){
        if(!curr) return;
        
        if(curr.left) {
            parents[curr.left.val]=curr;
             findParents(curr.left);
        }
        if(curr.right) {
            parents[curr.right.val]=curr;
            findParents(curr.right)
        }
    }
};