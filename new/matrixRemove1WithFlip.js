/**
 * @param {number[][]} grid
 * @return {boolean}
 * Input: grid = [[0,1,0],[1,0,1],[0,1,0]]
 * Output: true
 */

 /**
 * @param {number[][]} grid
 * @return {boolean}
 * hack is every row should same .. so compare every row with first one
 */
var removeOnes = function(grid) {
    for(let i=1;i<grid.length;i++){ // O(m)
        if(!compare(i,grid)) return false;
    }
    return true;
};

const compare = (row,  grid) => { //O(m)
    let isEq =  true;let isComp = true;
    for(let i=0;i<grid[row].length;i++){
        if( grid[row][i] !== grid[0][i]) isEq=false; 
    }
    if(!isEq){
        for(let i=0;i<grid[row].length;i++){
            if( grid[row][i] === grid[0][i]){
                isComp=false; 
            } 
        }
    }
 return isEq || isComp;
}

 //******** unoptimised */
var removeOnes = function(grid) {
    const seenVal = {};
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===1){
                if(!flip(i, j, grid, seenVal)) return false;
            }else {
                seenVal[i+'_'+j]=1;
            }
        }
    }
    return true;
};

const flip = (row, column, grid, seenVal) => {
    if(column>row){
        //flip column
        for(let i=0;i<grid.length;i++){
            if(grid[i][column] === 0){
                if(seenVal.hasOwnProperty(i+'_'+column)) return false;
                grid[i][column] = 1;
            }else{
               grid[i][column] = 0;
               seenVal[i+'_'+column]=1;
            }
        }
    }else{
        //flip row
        for(let i=0;i<grid[0].length;i++){
            if(grid[row][i] === 0){
                if(seenVal.hasOwnProperty(row+'_'+i)) return false;
                grid[row][i] = 1;
            }else{
               grid[row][i] = 0; 
               seenVal[row+'_'+i]=1;
            }
        }
    }
    return true;
}