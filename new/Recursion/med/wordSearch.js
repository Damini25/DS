/**
 * Link - https://leetcode.com/problems/word-search/
 * Time- O(n^2* 3^k) // because we are checking for three directions (parent is not included)
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    return recur(0, 0, 0);
    
    function recur(r, c, wI){
        if(wI === word.length) return true;
        
        if(r === board.length && wI !== word.length) {
            return false;
        }
        
        if(c === board[0].length) {
            return recur(r+1,0,wI);
        }
        
        if(board[r][c] === word[wI]){
            board[r][c] = true;
            const canForm = canFormWord(board,word, r,c,wI+1);
            if(canForm){
                return true;
            }else{
               board[r][c] = word[wI];
               return recur(r,c+1,wI);
            }
        }else{
            return recur(r,c+1,wI);
        }
        
        return false;
    }
};

function canFormWord(board, word, i, j, wordInd){
    if(wordInd === word.length) return true;
    let res = false;
    
    // up
    if(!res){
        if(i>0 && board[i-1][j]=== word[wordInd]) {
         board[i-1][j] = true;
         res = canFormWord(board, word, i-1, j, wordInd+1);
         if(!res) board[i-1][j] = word[wordInd];
         else return true;
        }
    }
    
    //down
    if(!res){
         if(i<board.length-1 && board[i+1][j]=== word[wordInd]){
             board[i+1][j] = true;
             res = canFormWord(board, word, i+1, j, wordInd+1);
             if(!res) board[i+1][j] = word[wordInd];
             else return true;
         }
    }
   
     // left
    if(!res){
         if(j>0 && board[i][j-1]=== word[wordInd]) {
             board[i][j-1]= true;
             res = canFormWord(board, word, i, j-1, wordInd+1);
             if(!res) board[i][j-1] = word[wordInd];
             else return true;
         }
    }
   
    //right
    if(!res){
        if(j< board[0].length-1 && board[i][j+1]=== word[wordInd]) {
              board[i][j+1]= true;
              res = canFormWord(board, word, i, j+1, wordInd+1);
              if(!res) board[i][j+1] = word[wordInd];
              else return true;
        }
    }
    
    return false;
}