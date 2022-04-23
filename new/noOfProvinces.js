/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let visited = {}; let count=0;
    for(let i=0;i<isConnected.length;i++){
        if(!visited.hasOwnProperty(i)){
             dfs(i,[]);
             count++;  
        }
    }
   
    function dfs(curr,arr){
        if(!visited.hasOwnProperty(curr)){
            if(isConnected[curr].length){
                for(let i =0; i<isConnected[curr].length; i++){
                    if(curr !== i && !visited.hasOwnProperty(i) &&isConnected[curr][i]===1 ){
                        dfs(i, arr);
                    }
                     visited[curr]=1;
                }
                
            }
        } 
        return;
    }
    
    return count;
};


Input - 
[[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,0,1,0,1,0,0,1],[0,0,0,0,1,1,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]]
[[1,0,0],[0,1,0],[0,0,1]]
[[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]
[[1,1,1],[1,1,1],[1,1,1]]
[[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]
[[1,1,0,0,0,0],[1,1,1,0,0,0],[0,1,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,1],[0,0,0,0,1,1]]


