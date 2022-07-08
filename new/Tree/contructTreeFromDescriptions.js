/**
 * Link- https://leetcode.com/problems/create-binary-tree-from-descriptions/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * T- O(n), S- O(n)
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */

var createBinaryTree = function(descriptions) {
    
    let parentMap={}, childMap={};
    
    for(let i=0;i<descriptions.length;i++){
        const [parent, child, isLeft] = descriptions[i];
        
        let node = null;
        if(parentMap.hasOwnProperty(parent)){
             node = parentMap[parent];
        }else if(childMap.hasOwnProperty(parent)){
                 node = childMap[parent];
        }else{
            node = new TreeNode(parent);
        }
        
         if(isLeft) {
                if(parentMap.hasOwnProperty(child)){
                    node.left = parentMap[child];
                }else if(childMap.hasOwnProperty(child)){
                         node.left = childMap[child];
                }else{
                    node.left = new TreeNode(child);
                }
              childMap[child]= node.left;
         }
         else {
             if(parentMap.hasOwnProperty(child)){
                    node.right = parentMap[child];
                }else if(childMap.hasOwnProperty(child)){
                    node.right = childMap[child];
                }else{
                    node.right = new TreeNode(child);
                }
              childMap[child]= node.right;
         }
        
        parentMap[parent]=node;
        
        
    }
    
    for(let i in parentMap){
        if(childMap[i]){
            delete parentMap[i];
        }
    }
    
    return parentMap[Object.keys(parentMap)[0]];
};

// ************ little shorter
var createBinaryTree = function(descriptions) {
    
    let parentMap={}, nodes={};
    
    for(let i=0;i<descriptions.length;i++){
        const [parent, child, isLeft] = descriptions[i];
        
        parentMap[child] = parent;
    
        if(!parentMap.hasOwnProperty(parent)){
           parentMap[parent] =  null;
        }
        if(!nodes.hasOwnProperty(parent)){
             nodes[parent] = new TreeNode(parent);
        }
        if(!nodes.hasOwnProperty(child)){
              nodes[child] = new TreeNode(child);
        }
        
         if(isLeft) {
             nodes[parent].left= nodes[child]
         }
         else {
             nodes[parent].right= nodes[child]
         }
    }
    
    for(let i in parentMap){
        if(parentMap[i] === null){
            return nodes[i];
        }
    }
    
};