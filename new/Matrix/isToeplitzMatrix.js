/**
 * Link- https://leetcode.com/problems/toeplitz-matrix/
 * @param {number[][]} matrix
 * @return {boolean}
 * * T- O(mn), S-O(n)
 */
var isToeplitzMatrix = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        let [x,y]=[i,0];
        if(!checkForToeplitz(x,y)) return false;
    }
    
    for(let j=1;j<matrix[0].length;j++){
        let [x,y]=[0,j];
        if(!checkForToeplitz(x,y)) return false;
    }
    
    function checkForToeplitz(x,y){
        let elem = matrix[x][y];
        x++,y++;
        while(x>=0 && x<matrix.length && y>0 && y<matrix[0].length){
            if(matrix[x][y] !==elem ) return false;
            x++,y++;
        }
        return true;
    }
    
    return true;
};
// ****************** optimised
/**
 * T- O(mn), S-O(1)
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(matrix[i][j]!== matrix[i-1][j-1])return false;
        }
    }
    
    return true;
};