//Link- https://leetcode.com/problems/maximum-width-of-binary-tree/
// T- O(n), S-O(n)
var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    let q= [{node:root, ind:0}];
    let width = 1;

    while(q.length){
        let size = q.length;
        let startInd = q[0].ind;

        let s =-1, e = 0;
        for(let i=0;i<size;i++){
            const {node, ind}= q.shift();
            
            if(i === 0){
                s = ind;
            }
            if(i=== size-1){
                e= ind;
            }
            
            const minInd = ind-startInd; // to prevent overflow, at every level we indexed nodes like 1,2,3,4
            
            if(node && node.left) {
                    q.push({node:node.left, ind : 2*minInd+1 });
            }
            if(node && node.right){
                q.push({node:node.right, ind : 2*minInd+2 });
            }
        }
        width= Math.max(e-s+1, width);
    }
    return width;
};