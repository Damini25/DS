/**
 * Link- https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 * T- O(n+m+indices.length)
 */
var oddCells = function(m, n, indices) {
    
    let row = new Array(m).fill(0);
    let col = new Array(n).fill(0);

    for(let i=0;i<indices.length;i++){
        row[indices[i][0]]+=1;
        col[indices[i][1]]+=1;
    }

    let oddRow = 0;
    for(let i=0;i<row.length;i++){
        if(row[i]%2!==0)oddRow++;
    }
    
    let oddCol =0;
    for(let i=0;i<col.length;i++){
        if(col[i]%2!==0)oddCol++;
    }
    
    return oddRow*n + oddCol*m - 2 * oddRow*oddCol;
};