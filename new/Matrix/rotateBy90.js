/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 //T- O(m) where m = number of cells in matrix
 // S-O(1)
var rotate = function(matrix) {
    let m = matrix.length;
    
    // find transpose;
    for(let i=0;i<m;i++){
        for(let j=i;j<m;j++){
            let x = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = x;
        }
    }
    
    // reverse rows
    for(let k=0;k<m;k++){
        let i=0, j=m-1;
        while(i<j){
            let x = matrix[k][i];
            matrix[k][i] = matrix[k][j];
            matrix[k][j] = x;
            i++;j--;
        }
    }
    
    return matrix;
};