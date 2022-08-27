/**
 * Link- https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    let q =[root];
    
    while(q.length){
        let size = q.length;
        
        for(let i=0; i<size; i++){
            let curr = q.shift();
            let next = i < size-1 ? q[0] : null;
            
            if(curr){
                curr.next = next ? next : null;
                q.push(curr.left);
                q.push(curr.right);
            }
        }
    }
    return root;
};