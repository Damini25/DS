/**
 * Link- https://leetcode.com/problems/set-matrix-zeroes/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * T- O(mn), S-O(1)
 */
var setZeroes = function(matrix) {
   
    let isCol = false;
    
    for(let i=0;i<matrix.length;i++){  //O(mn)
        if(matrix[i][0] == 0){
                isCol= true;
        }
        for(let j=1;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    for(let i=1;i<matrix.length;i++){  //O(mn)
        for(let j=1;j<matrix[0].length;j++){
           if(matrix[i][0] === 0  || matrix[0][j] === 0){
               matrix[i][j]=0;
           }
        }
    }
    
    if(matrix[0][0] === 0){
        for(let j=0;j<matrix[0].length;j++){ //O(n)
               matrix[0][j]=0;
        }
    }
    
    if(isCol){
        for(let i=0;i<matrix.length;i++){ //O(m)
               matrix[i][0]=0;
        }
    }
    return matrix;
};