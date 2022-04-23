/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// maximum space reached error-out of stack
var minReorder = function(n, connections) {
    let queue = []; let visited={0:1}; let count = 0;
    count = evaluate(connections, visited, count, queue);
    //console.log(queue,count);
    if(queue.length){
        count = evaluate(queue,visited, count, queue)
    };
    return count;
};

function evaluate(arr, visited, count, queue){
   for(let i=0;i<arr.length;i++){
        let isFirst = visited.hasOwnProperty(arr[i][0]);
        let isSec = visited.hasOwnProperty(arr[i][1]);
        if(!isFirst && !isSec){
            queue.push(arr[i]);
        }else if(isFirst){
            visited[arr[i][1]]=1;
            count++;
        }else visited[arr[i][0]]=1;
    };
    return count;
}

//------------------------------------------------
// little more complexity
var minReorder = function(n, connections) {
    let visited={}; let count = 0;
    
    let inEdgesList = new Array(n).fill(0).map(()=>[]);
    let outEdgesList = new Array(n).fill(0).map(()=>[]);
    
    for(let [from, to]  of connections){
        outEdgesList[from].push(to);
        inEdgesList[to].push(from);
    };
    //console.log('outEdgesList',outEdgesList, inEdgesList);
    
    function dfs(curr){
        if(visited.hasOwnProperty(curr)) return;
        visited[curr]=1;
        
        let inEdge = inEdgesList[curr]
        let outEdge = outEdgesList[curr];
        
        if(outEdge.length){
            for(let i =0;i<outEdge.length;i++){
                if(!visited.hasOwnProperty(outEdge[i])){
                    count++;
                    dfs(outEdge[i]);
                    
                }
            }
        }
        
        if(inEdge.length){
            for(let i =0;i<inEdge.length;i++){
               if(!visited.hasOwnProperty(inEdge[i])){
                dfs(inEdge[i]);
               }
            }
        }
    }
    
    dfs(0);
    return count;
};

//-----------------------------------------------
// best complexity
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let visited={}; 
    //let count = 0;
    
    let inEdgesList = new Array(n).fill(0).map(()=>[]);
    let outEdgesList = new Array(n).fill(0).map(()=>[]);
    
    for(let [from, to]  of connections){
        outEdgesList[from].push(to);
        inEdgesList[to].push(from);
    };
    
   
    return dfs(0, 0, visited, inEdgesList, outEdgesList);
};

function dfs(curr, count, visited, inEdgesList, outEdgesList){
        if(visited.hasOwnProperty(curr)) return;
        visited[curr]=1;
        
        let inEdge = inEdgesList[curr]
        let outEdge = outEdgesList[curr];
        
        if(outEdge.length){
            for(let i =0;i<outEdge.length;i++){
                if(!visited.hasOwnProperty(outEdge[i])){
                    count++;
                   count= dfs(outEdge[i], count, visited, inEdgesList, outEdgesList);
                    
                }
            }
        }
        
        if(inEdge.length){
            for(let i =0;i<inEdge.length;i++){
               if(!visited.hasOwnProperty(inEdge[i])){
               count= dfs(inEdge[i], count, visited, inEdgesList, outEdgesList);
               }
            }
        }
    return count;
}