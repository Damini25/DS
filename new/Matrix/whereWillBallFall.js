/**
 * Link- https://leetcode.com/problems/where-will-the-ball-fall/
 * @param {number[][]} grid
 * @return {number[]}
 * T- O(m*n)
 * S- O(n)
 */
var findBall = function(grid) {
    let res=[];
    for(let i=0;i<grid[0].length;i++){
        const col = checkForBall(0,i)
        if(col!== false){
            res.push(col);
        }else{
            res.push(-1);
        }
    }
    return res;
    
    function checkForBall(i,j){
        if(i > grid.length-1) return j;
        if(j < 0 || j > grid[0].length-1){
            return false;
        }else if(grid[i][j]===1){
            if(j< grid[0].length-1 && grid[i][j+1]===1){
                return checkForBall(i+1, j+1);
            }else{
                return false;
            }
        }else{
            if(j>0 && grid[i][j-1]===-1){
                return checkForBall(i+1, j-1);
            }else{
                return false;
            }
        }
        return j;
    }
};