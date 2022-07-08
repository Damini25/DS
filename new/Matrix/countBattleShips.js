/**
 * @param {character[][]} board
 * @return {number}
 * T- O(mn(m or n))
 * S- O(1);
 */
var countBattleships = function(board) {
    
    let count = 0;
    for(let i =0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            
            if(board[i][j] === 'X'){
                count++;
                let vertBattleShip = false;
                
                if( i< board.length-1 && board[i+1][j] === 'X'){
                  vertBattleShip = true;
                  let q = [[i+1,j]];
                
                  while(q.length){
                      let [m,n] = q.shift();
                      if(m < board.length-1 && board[m+1][n] === 'X'){
                         q.push([m+1,n]);
                      }
                      board[m][n] = '';
                  }
                }
                
                if(!vertBattleShip){
                   if(j< board[0].length-1 && board[i][j+1] === 'X'){
                          let q = [[i,j+1]];
                          while(q.length){
                              let [m,n] = q.shift();
                              if(n < board[0].length-1 && board[m][n+1] === 'X'){
                                 q.push([m,n+1]);
                              }
                              board[m][n] = '';
                          }
                    }
                 }
                
                board[i][j] = '';
            }
        }
    }
    
    return count;
};