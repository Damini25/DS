/**
 * Link- https://leetcode.com/problems/max-increase-to-keep-city-skyline/
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let maxRow = [];
    let maxCol =[]
    
    for(let i =0;i<grid[0].length;i++){
        maxRow[i]=-Infinity;
        for(let j = 0; j<grid.length; j++){
             maxRow[i]=Math.max(maxRow[i], grid[j][i])
        }
    }
    
     for(let i = 0;i<grid.length;i++){
        maxCol[i]=-Infinity;
        for(let j = 0; j<grid[0].length; j++){
             maxCol[i]=Math.max(maxCol[i], grid[i][j])
        }
    }
    
    let incHeight = 0;
    for(let i = 0;i<grid.length;i++){
        for(let j = 0; j<grid[0].length; j++){
            incHeight += (Math.min(maxRow[j], maxCol[i])- grid[i][j])
        }
    }
    return incHeight;
};