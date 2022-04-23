/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n).fill(0).map(item => new Array(n).fill('.'));
    let result = [];
    
    for(let j=0; j<board[0].length;j++){
       board[0][j] = 'Q';
       recur(1, n-1);
       board[0][j] = '.';
       //console.log('check', board, result);
    }
    
    return result;
    
    function recur(r, n){
       // console.log('first',board,r, c)
        if(r>board.length-1 || n <= 0 ) {
            let _arr = [];
            for(let i=0;i<board[0].length;i++){
                _arr.push(board[i].join(''))
            }
            result.push(_arr);
            return;
        }
        for(let j=0;j<board[0].length;j++){
            const canPlace = checkIfQueenCanBePlaced(r,j);
            if(canPlace){
                board[r][j] = 'Q';
                recur(r+1, n-1);
                board[r][j]='.'
            }
        }
        return;
    }
    
    function checkIfQueenCanBePlaced(i,j){
      //  console.log('checkIfQueenCanBePlacedi_j',i,j)
        let p = i;
        while(p>0){
            if(board[p-1][j]==='Q') return false;
            p--;
        }
        p = i; let q=j;
        while(p>0 && q < board[0].length-1){
           if(board[p-1][q+1]==='Q') return false;
            p--;q++;
        }
        
        p=i, q=j;
        while(p>0 && q>0){
            if(board[p-1][q-1]==='Q') return false;
            p--;q--;
        }
        return true;
    }
};


// ****************************** optimised *************************

/**
 * T- (N)*T(N-1) + O(N*N)   => O(N*N*N + N!) => O(N!)
 * S- O(n*n)
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n).fill(0).map(item => new Array(n).fill('.'));
    let result = [];
    
   
    recur(0, n);
    return result;
    
    function recur(r, n){
       // console.log('first',board,r, c)
        if(r>board.length-1 || n <= 0 ) {
            let _arr = [];
            for(let i=0;i<board[0].length;i++){
                _arr.push(board[i].join(''))
            }
            result.push(_arr);
            return;
        }
        for(let j=0;j<board[0].length;j++){
            const canPlace = checkIfQueenCanBePlaced(r,j);
            if(canPlace){
                board[r][j] = 'Q';
                recur(r+1, n-1);
                board[r][j]='.'
            }
        }
        return;
    }
    
    function checkIfQueenCanBePlaced(i,j){ // O(r+r+r)
      //  console.log('checkIfQueenCanBePlacedi_j',i,j)
        let p = i;
        while(p>0){
            if(board[p-1][j]==='Q') return false;
            p--;
        }
        p = i; let q=j;
        while(p>0 && q < board[0].length-1){
           if(board[p-1][q+1]==='Q') return false;
            p--;q++;
        }
        
        p=i, q=j;
        while(p>0 && q>0){
            if(board[p-1][q-1]==='Q') return false;
            p--;q--;
        }
        return true;
    }
};