//Link- https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1#
// T- O(n+e), S- O(n);

/**
 * BFS approach
 * steps-
 * create visited Array with all nodes set as false
 * traverse every node and perform BFS to check for cycle
 * Trick- maintain prev parent of node, -> 
 * if adj node is visited and its value is not equal to parent than return true
 */
class Solution {
    // Function to detect cycle in an undirected graph.
    isCycle(V, adj) {
        let visited = [];
        
        for(let i=0; i<V; i++){ //O(n)
            visited[i]=false;
        }
        for(let i=0; i<V; i++){ //O(n+e)
            if(!visited[i]){
                 if(this.checkForBFSCycle(i, adj, visited)) return true;
            }
        }
        
        return false;
    }
    
    checkForBFSCycle(curr, adj, visited){
        let q = [[curr, -1]];
        visited[curr]=true;
        while(q.length){
            let [first, prev] = q.shift();
           
                for(let i =0; i < adj[first].length;i++){
                    if(!visited[adj[first][i]]){
                        q.push([adj[first][i], first]);
                        visited[adj[first][i]]=1;
                    }else{
                        if(adj[first][i] != prev) return true;
                    }
                }
        }
        return false;
    }
}

// using DFS -

class Solution {
    // Function to detect cycle in an undirected graph.
    isCycle(V, adj) {
        let visited = [];
        //console.log(adj)
        for(let i=0; i<V; i++){
            visited[i]=false;
        }
        for(let i=0; i<V; i++){
            if(!visited[i]){
                 if(this.checkForCycle([i,-1], adj, visited)) return true;
            }
        }
        
        return false;
    }
    
    checkForCycle(curr, adj, visited ){
        let [first, prev] = curr;
        for(let i = 0; i < adj[first].length; i++){
            if(!visited[adj[first][i]] && adj[first][i] != prev){
                visited[adj[first][i]]=true;
                if(this.checkForCycle([adj[first][i], first], adj, visited)) return true;
            }else{
                if(adj[first][i] != prev) return true;
            }
        }
        return false;
    }
}