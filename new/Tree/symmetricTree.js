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
 * @return {boolean}
 */

 // optimised
var isSymmetric = function(root) {
    if(!root.left && !root.right) return true;
    if((root.left && !root.right)  || (!root.left && root.right) || root.left.val !== root.right.val) return false;
    
    return recur(root.left, root.right)
    
    function recur(curr1, curr2){
        if(!curr1 && !curr2) return true;
        if((!curr1 && curr2) || (curr1 && !curr2) || (curr1.val !== curr2.val)) return false;
        
        return recur(curr1.left, curr2.right) && recur(curr1.right, curr2.left)
        
    }
};


// iterative but complex

var isSymmetric = function(root) {
    if(!root.left && !root.right) return true;
    if((root.left && !root.right)  || (!root.left && root.right) || root.left.val !== root.right.val) return false;
    
    let q = [[root.left], [root.right]];
    
    while(q.length){
        let arr1 = q.shift();
        let arr2 = q.shift();
        if(arr1.length !== arr2.length) return false;
        let i=0; let j= 0;
        let res1 = [], res2=[];
        
        while(i>=0 && j<arr2.length){
            let key = arr2.length-1-i;
            if((arr1[i] && !arr2[key]) || (!arr1[i] && arr2[key])) return false;
            if((arr1[i] && arr1[i].val) !== (arr2[key] && arr2[key].val)) return false;
            if(arr1[i])res1.push(arr1[i].left, arr1[i].right);
            if(arr2[j])res2.push(arr2[j].left, arr2[j].right);
            i++; j++;
        }
        
        if((res1.length && !res2.length)|| (!res1.length && res2.length)) return false;
        if(res1.length && res2.length) q.push(res1, res2);
    }
    return true;
};