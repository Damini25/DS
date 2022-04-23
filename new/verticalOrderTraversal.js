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
 * @return {number[][]}
 * Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
 */
var verticalOrder = function(root) {
    let map ={};
    let queue = [{cNode:root, hd:0}];
    
    while(queue.length){
        let {cNode, hd} = queue.shift();
        
        if(cNode){
            if(!map.hasOwnProperty(hd)){
                map[hd]=[cNode.val];
            }else{
                map[hd].push(cNode.val);
            }
        }
        if(cNode && cNode.left) queue.push({cNode:cNode.left,hd:hd-1});
        if(cNode && cNode.right) queue.push({cNode:cNode.right,hd:hd+1});
    }
   
    let keys = Object.keys(map);
    keys.sort((a,b)=>a-b);
    let result=[];
    for(let i =0;i<keys.length;i++){
        result.push(map[keys[i]])
    }
    return result;
};