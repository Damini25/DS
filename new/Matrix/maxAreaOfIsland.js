/**
 * Link- https://leetcode.com/problems/max-area-of-island/
 * @param {number[][]} grid
 * @return {number}
 * T and S - O(R*C)
 */
var maxAreaOfIsland = function(grid) {
    let m= grid.length;
    let n = grid[0].length;
    let count = 0;
    
    for(let i=0;i< m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1){
                grid[i][j] = 'x';
                const _counter = getIslandArea(i,j, 1)
                count = Math.max(count, _counter)
            }
        }
    }
    function getIslandArea(row, col, counter){
        let coord = [[-1,0],[1,0],[0,-1],[0,1]];
        
        for(let i=0;i<coord.length;i++){
            let x = row+coord[i][0];
            let y = col+coord[i][1];
            if(x>=0 && x<m && y>=0 && y<n){
                if(grid[x][y] === 1){
                    grid[x][y] ='x';
                    counter+=getIslandArea(x, y, 1);
                }
            }
        }
        return counter;
    }
    
    
    return count;
};