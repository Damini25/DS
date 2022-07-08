/**
 * Link- https://leetcode.com/problems/flip-equivalent-binary-trees/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * T- O(root1)
 * S- O(root1)
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if(!root1 && !root2) return true;
    if(!root1 || !root2) return false;
    if(root1.val !== root2.val) return false;
    
    let isFlipNeeded = false;
    
    if(root1.left){
        if((root2.left && root1.left.val !== root2.left.val) && (root2.right && root1.left.val !== root2.right.val)){
            return false;
        }
        if(root2.right && root1.left.val === root2.right.val) isFlipNeeded= true;
        else isFlipNeeded= false;
    }else{
        if(root2.left && root2.right) return false;
        if(!root2.right) isFlipNeeded= true
        else isFlipNeeded= false
    }
    
      if(root1.right){
        if((root2.left && root1.right.val !== root2.left.val) && (root2.right && root1.right.val !== root2.right.val)){
            return false;
        }
           if(root2.left && root1.right.val === root2.left.val) isFlipNeeded= true
           else isFlipNeeded = false;
     }else{
         
          if(root2.left && root2.right) return false;
          if(!root2.left) isFlipNeeded= true;
          else isFlipNeeded= false;
     }
    
    if(isFlipNeeded){
        let temp = root1.left;
        root1.left = root1.right;
        root1.right = temp;
     }
  
    if(root1.left && !flipEquiv(root1.left, root2.left)) return false;
    if(root1.right && !flipEquiv(root1.right, root2.right)) return false;
    
    return true;
};

// ********** shorter code ****
var flipEquiv = function(root1, root2) {
    if(root1 == root2) return true;
    if(!root1 || !root2 || (root1.val !==root2.val)) return false;
    return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) || ( flipEquiv(root1.left, root2.right) &&flipEquiv(root1.right, root2.left));
};