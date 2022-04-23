/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 * root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 */
var lowestCommonAncestor = function(p, q) {
    const pParent = {};
    let curr = p; // O(L(p)) 
    while(curr){
        if(curr.val===q.val) return q;
        pParent[curr.val]= 1;
        curr=curr.parent;
    }
    
    curr = q;
    while(curr){ // O(L(q))
       if(pParent[curr.val]) return curr;
        curr=curr.parent;
    }
};