/**
 * @param {number[][]} grid
 * @return {number}
 * Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
t- O(mn)
 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let tCount=0;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            let curr = grid[i][j];
            let count = 0;
            
            if(curr===1){
                tCount= tCount+4;
                
                if(i>0 && grid[i-1][j]=== 1){
                    tCount= tCount-2
                };
                if(j>0 && grid[i][j-1]=== 1){
                     tCount=tCount-2
                };
            }  
        }  
    }
    return tCount;
};

 // **** little less efficient******
var islandPerimeter = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    
    let tCount=0;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            let curr = grid[i][j];
            let count = 0;
            if(curr===1){
                if(checkCond(i-1,j) && grid[i-1][j]===0){
                    count++;tCount++;
                }
                if(checkCond(i+1,j) && grid[i+1][j] === 0){
                    count++;tCount++
                }
                if(checkCond(i,j-1) && grid[i][j-1]=== 0){
                     count++;tCount++
                }
                if(checkCond(i,j+1) && grid[i][j+1]=== 0){
                    count++;tCount++
                }
                
                if(i===0 || i === row-1){
                    count++;tCount++;
                }
                if(j===0 || j===col-1) {count++;tCount++}
                // console.log('count',i+''+j, count)
            }
        }
        
    }
    function checkCond(i,j){
        return i>=0 && i<row && j>=0 && j<col
    }
    
    return tCount;
};