/**
 * Link- https://leetcode.com/problems/sudoku-solver/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 
 * T- O(9)Math.pow(n*n)
 * S- O(n*n)
 */
var solveSudoku = function(board) {
   
    solve(0,0);
    return board;
    
    function solve(r,c){
       
        if(r == board.length-1 && c == board.length) return true;
        if(c == board.length) {
            return solve(r+1, 0);
            
        }
        if(board[r][c]!='.'){
            return solve(r,c+1);
        }
        
        for(let i=1;i<=9;i++){
            const safe = isSafe(r,c,board,i)
            
            if(safe) {
                board[r][c]= String(i);
                if(solve(r,c+1)) return true;
                else  board[r][c]='.';
            }
        }
        return false;
    }
};

function isSafe(r, c, board, elem){
    
    for(let j=0;j<board.length;j++){
        if(board[r][j]==elem) return false;
    }
    for(let i=0;i<board.length;i++){
        if(board[i][c]==elem) return false;
    }
    
    let sq = Math.floor(Math.sqrt(board.length));
    let rS = r - r%sq;
    let cS = c-  c%sq;
    let rE = rS+2;
    let cE = cS+2;
    
    for(let i = rS;i<=rE;i++){
        for(let j=cS;j<cE;j++){
            if(board[i][j]==elem) return false;
        }
    }
    return true;
}

