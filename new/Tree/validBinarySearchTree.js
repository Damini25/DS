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
var isValidBST = function(root) {
    const val = recur(root);
    return !val ? false : true;
    
    function recur(root){
        if(!root.left && !root.right){
            return {min:root.val, max:root.val};
        }
        let leftVal = null;
        let rightVal = null;
        if(root.left){
            leftVal = recur(root.left);
            if(leftVal === false || leftVal.max >= root.val) return false;
        }
        if(root.right){
            rightVal = recur(root.right);
            if(rightVal === false || rightVal.min <= root.val)return false;
        }
        return {
            min: leftVal ?  Math.min(leftVal.min, root.val): root.val,
            max: rightVal  ? Math.max(rightVal.max, root.val) : root.val
        }
    }
};

// optimised using recursion
var isValidBST = function(root) {
    let prev = null;
    return inOrder(root);
    
    function inOrder(root){
        if(!root) return true;
        if(root.left){
           if(!inOrder(root.left)) return false;
        }
        if(prev!== null && prev.val>= root.val) return false;
        prev = root;
        return inOrder(root.right);
    }
};

// using stack
var isValidBST = function(root) {
    let stack = [];
    let curr = root;
    let prev = null;
    while(true){
        if(curr){
            stack.push(curr);
            curr= curr.left;
        }else{
            if(!stack.length)return true;
            const last = stack.pop();
            if(prev!== null && prev.val >= last.val) return false;
            prev= last;
            curr = last.right;
        }
    }
};