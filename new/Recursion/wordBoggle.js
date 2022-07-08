function wordBoggle(board,dictionary){
    const m = board.length;
    const n = board[0].length;
    let res= [];
    //code here
    for(let i in dictionary){
       if(canFormWord(dictionary[i])){
           res.push(dictionary[i]);
       }
    }
    
    function canFormWord(word){
        for(let i=0;i<m;i++){
            for(let j=0; j<n;j++){
                
                if(board[i][j] === word[0]){
                    //console.log('wr', word);
                   // let temp = board[i][j];
                    board[i][j]='';
                    const isFormed = check(i,j,1, word);
                    board[i][j]= word[0];
                   // console.log('wr', isFormed, board);
                    if(isFormed) return true;
                }
            }
        }
        return false;
    }
    
    function check(i,j,wordI, word){
        if(wordI >= word.length) return true;
        let coord = [[1,0],[-1,0],[0,1],[0,-1],[-1,-1],[1,-1],[-1,1],[1,1]]
        let canForm = true;
        for(let k=0;k<coord.length;k++){
            let x = i + coord[k][0];
            let y = j + coord[k][1];
            if(x>=0 && x<m && y>=0 && y<n && board[x][y] === word[wordI]){
               
                board[x][y] ='';
                const isFormed = check(x,y,wordI+1, word);
                board[x][y] = word[wordI];
                if(isFormed) return true;
            }
        }
        return false;
    }

    return res.length ? res.sort() : [-1];
}