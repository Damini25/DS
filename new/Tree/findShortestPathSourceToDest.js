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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    
    // find parents, O(h)
    let parents = {[root.val]:null};
    let stack = [root];
    
    while(!parents.hasOwnProperty(startValue) || !parents.hasOwnProperty(destValue)){
        let curr = stack.pop();
        
        if(curr && curr.left){
            parents[curr.left.val] = {node:curr, isLeft:true}
            stack.push(curr.left);
        }
        if(curr && curr.right){
            parents[curr.right.val] = {node:curr, isLeft:false}
            stack.push(curr.right);
        }
    }
 
    // find LCA -> O(h)
    let startParent = [];
    let sPMap = {};
    let curr =  startValue;
  
    while(parents[curr]){
        startParent.push(parents[curr]);
        sPMap[parents[curr].node.val] = parents[curr];
        curr = parents[curr].node.val;
    }
    
    //  // find LCA -> O(h)
    let destParent = [];
    curr =  destValue;
    let str = "";
    
     while(curr){
        if(curr === startValue || sPMap[curr] ){
            break;
        }
        destParent.push(parents[curr]);
        curr = parents[curr].node.val;
    }
    
    //********** curr = lca , found ***************************
    // find path
    str = startValue !==curr ? 'U':'';
    if(curr !== startValue){
        for(let i=0;i<startParent.length; i++){
            if(startParent[i].node.val === curr) break;
            str+='U';
         }
    }
    
    for(let i=destParent.length-1;i>=0;i--){
        str+=destParent[i].isLeft ? 'L':'R'
    }
    
    return str;
};