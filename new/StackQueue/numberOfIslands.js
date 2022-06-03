/**
 * Link- https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] !== 'v' && grid[i][j] === '1'){
                findIsland(i,j);
                count++;
            }
        }
    }
    
    function findIsland(r,c){
        let s = [[r,c]];
        while(s.length){
            let [i,j] = s.pop();
            
            if(i>0 && grid[i-1][j] === '1' && grid[i-1][j] !== 'v'){
                s.push([i-1, j]);
            }
            if(i< grid.length-1 && grid[i+1][j]=== '1' && grid[i+1][j]!=='v'){
                s.push([i+1, j]);
            }
            if(j>0 && grid[i][j-1]=== '1' && grid[i][j-1]!=='v'){
                s.push([i, j-1]);
            }
            if(j<grid[0].length-1 && grid[i][j+1]=== '1' && grid[i][j+1]!=='v'){
                 s.push([i, j+1]);
            }
            grid[i][j] = 'v';
        }
    }
    
    return count;
};