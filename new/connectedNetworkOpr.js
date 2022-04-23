/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

var makeConnected = function(n, connections) {
    if(connections.length < n-1) return -1;
    
    const visited={}; let map=[]; 
    
    let list = new Array(n).fill(0).map(()=>[]);
    
    for(let [first, sec] of connections){
        list[first].push(sec);
        list[sec].push(first);
    }
    
    for(let i=0;i<n;i++){
        if(!visited.hasOwnProperty(i)){
            const nList = dfs(i, list, visited, []);
            map.push(nList);
         }
    }
    return map.length-1;
};

function dfs(curr, list, visited, network){
    if(!visited.hasOwnProperty(curr)){
        let subList = list[curr];
        visited[curr]=1;
        network.push(curr);
        if(subList.length){
            for(let i=0;i<subList.length;i++){
                if(!visited.hasOwnProperty(subList[i])){
                    dfs(subList[i], list, visited, network);
                }
            }
        }
    }
    return network;
}

//------------optimized one-----------------------------

var makeConnected = function(n, connections) {
    if(connections.length < n-1) return -1;
    
    const visited={}; let count=-1; 
    
    let list = new Array(n).fill(0).map(()=>[]);
    
    for(let [first, sec] of connections){
        list[first].push(sec);
        list[sec].push(first);
    }
    
    for(let i=0;i<n;i++){
        if(!visited.hasOwnProperty(i)){
            dfs(i, list, visited, []);
            count++;
         }
    }
    return count;
};

function dfs(curr, list, visited, network){
    if(!visited.hasOwnProperty(curr)){
        let subList = list[curr];
        visited[curr]=1;
        network.push(curr);
        if(subList.length){
            for(let i=0;i<subList.length;i++){
                if(!visited.hasOwnProperty(subList[i])){
                    dfs(subList[i], list, visited, network);
                }
            }
        }
    }
    return network;
}