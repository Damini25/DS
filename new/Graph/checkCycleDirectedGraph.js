/**
 * Link- https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1#
 * T- O(N+E)
 * S- O(N+N+E)
 * 
 * Trick take two arrays- Visited and DFS-visited
 */
class Solution {
    // Function to detect cycle in a directed graph.
    isCyclic(V, adj) {
        // code here
        let visited = new Array(V);
        let dfsVisited = new Array(V);
        
        for(let i=0;i<V;i++){
            visited[i] = false;
            dfsVisited[i] = false;
        }
        
        for(let i=0;i<V;i++){
            if(!visited[i]){
                if(this.checkForCycle(i, adj, visited, dfsVisited))return true;
            }
        }
        
        return false;
    }
    
    checkForCycle(v, adj, visited, dfsVisited){
         let currAdj = adj[v];
         visited[v] = 1;
         dfsVisited[v] = 1;
        for(let i=0; i<currAdj.length; i++){
                if(!visited[currAdj[i]]) {
                    if(this.checkForCycle(currAdj[i], adj, visited, dfsVisited)) return true;
                }else if(dfsVisited[currAdj[i]]){
                     return true;
                }
        }
        dfsVisited[v]= 0;
        return false;
    }
}