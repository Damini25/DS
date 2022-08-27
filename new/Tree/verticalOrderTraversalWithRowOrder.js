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
 */
var verticalTraversal = function(root) {
    if(!root) return [];
    
   // let map = {[0]:[{node:root.val, row:0}]};
    
    let arr = [{level:0,node:root.val, row:0}];
    
    recur(root, 0, 0);
    
    function recur(curr, level, row){
        
        // add all nodes with rows and columns to arr
        if(!curr) return;
        
        if(curr.left){
            const _key = level-1;
            arr.push({level:_key, node:curr.left.val, row:row+1})
            recur(curr.left, _key, row+1);
        }
        
        if(curr.right){
            const _key = level+1;
            arr.push({level:_key, node: curr.right.val, row:row+1})
            recur(curr.right, _key, row+1);
        }
    }
    
    // sort by level
    arr.sort((a,b)=>a.level-b.level);
    
    // sort by row with same level
    arr.sort((a,b)=>{
        if(a.level === b.level){
            return a.row-b.row;
        }
    });
    

    // segregate by same level , and sort by node.val if same row in a level.
    let levelArr= []; let currLevel = arr[0].level;
    let rowWiseArr = [];
    
    for(let i=0;i<arr.length;i++){
        if(arr[i].level !== currLevel){
            rowWiseArr.push(levelArr)
            levelArr=[{node:arr[i].node, row:arr[i].row}];
            currLevel = arr[i].level;
        }else{
            levelArr.push({node:arr[i].node, row:arr[i].row});
        }
    }
    
    if(levelArr.length) rowWiseArr.push(levelArr);
    
   
    let result=[];
    for(let i=0;i<rowWiseArr.length;i++){
        
        rowWiseArr[i].sort((a,b)=>{
            if(a.row === b.row){
                return a.node-b.node;
            }
        });
        let _result=[];
        for(let j=0;j<rowWiseArr[i].length;j++){
            _result.push(rowWiseArr[i][j].node);
        }
        result.push(_result);
    }
    return result;
};