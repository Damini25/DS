/**
 * Link-https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * T-O(n)
 * S-O(n)
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let stack =[root];
    let parent = {
        [root.val]: null
    }
    
    // create parent Map
    while(!parent.hasOwnProperty(p.val) || !parent.hasOwnProperty(q.val)){
        const curr = stack.pop();
        
        if(curr && curr.left){
            parent[curr.left.val]= curr;
            stack.push(curr.left);
            
        }
        if(curr && curr.right){
            parent[curr.right.val]= curr;
            stack.push(curr.right);
        }
        
    }
    
    let anscestors ={};
    while(p){
        
        anscestors[p.val] = p;
        
        if(p.val === q.val){
            return q;
        }
        
        p = parent[p.val];
    }
    
    
    while(q){
       if(anscestors.hasOwnProperty(q.val)) return anscestors[q.val];
       q = parent[q.val];
    }
    
    return q.val;
};