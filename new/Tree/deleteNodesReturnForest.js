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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 * T- O(n*3)
 * S-   O(n)
 */
var delNodes = function(root, to_delete) {
    let rootMap = { [root.val]: root };
    
    for(let i=0;i<to_delete.length;i++){//O(n)
        for(let j in rootMap){ //O(m)
            if(findAndUpdate(rootMap[j], null, null ,to_delete[i])) break;
        }
    }
    
    function findAndUpdate(curr, parent, isLeft, toDelete){
        
        if(curr.val === toDelete){
            if(parent === null) delete rootMap[curr.val];
            
            if(curr.left){
                rootMap[curr.left.val] = curr.left;
            }
            if(curr.right){
                rootMap[curr.right.val] = curr.right;
            }
            if(isLeft === true){
                parent.left = null;
            }else if(isLeft === false){
                parent.right = null;
            }
            return true;
        }
        
        if(curr.left) findAndUpdate(curr.left, curr, true, toDelete)
        if(curr.right) findAndUpdate(curr.right, curr, false, toDelete)
    }
    
    return Object.values(rootMap);
};

// ****************** optimised version

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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 * T- O(n)
 * S-  O(n)
 */
var delNodes = function(root, to_delete) {
    let deleteMap={};
    let forest = [];
    
    for(let i=0;i<to_delete.length;i++){
        deleteMap[to_delete[i]]=1;
    }
    
    if(!deleteNode(root)){
        forest.push(root);
    };
    
    return forest;
    
    function deleteNode(node){ // O(n)
        if(node.left){
            if(deleteNode(node.left)){
                node.left = null;
            }
        }
        if(node.right){
             if(deleteNode(node.right)){
                node.right = null;
            }
        }
        
        if(deleteMap[node.val]){
            if(node.left){
                forest.push(node.left);
            }
            if(node.right){
                forest.push(node.right);
            }
            return true;
        }
        return null;
    }
};