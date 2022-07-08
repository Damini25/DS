//Link- https://practice.geeksforgeeks.org/problems/bipartite-graph/1#
//T- O(N+E), S-O(N+E)
// Bipartite graph means  - no adjacent nodes can have same color.
// trick- maintain color of visited nodes in visited array-> 
// traverse adjacently list of top element and check if visited / non visited, -> if visited check for its color match with curr elem 
// using bfs approach
class Solution {
    
    isBipartite(V,adj)
    {
        //code here
        const visited=[];
        for(let i =0;i<V;i++){
            visited[i]= false;
        }
        
        for(let i =0;i<V;i++){
            if(!visited[i]){
                if(!this.checkForBipartite(i, adj, visited)) return false;
            }
        }
        return true;
    }
    checkForBipartite(v, adj, visited){
        
        let q = [[v,-1,'B']];
        visited[v] = -1;
        while(q.length){ // O(E) E edges will be added to queue
            let [elem, parent, color] = q.shift();
            
            for(let i=0;i<adj[elem].length;i++){
                let _elem = adj[elem][i];
                
                if(!visited[_elem] && parent != _elem){
                    const _color = color == 'B' ? 'G': 'B';
                    visited[_elem] = _color;
                    q.push([_elem, elem, _color]);
                    
                }else{
                    if(parent != _elem && visited[_elem] == color){
                        return false;
                    }
                }
            }
        }
        return true;
    }
}


// using DFS
class Solution {
    
    isBipartite(V,adj)
    {
        //code here
        const visited=[];
        for(let i =0;i<V;i++){ //O(n)
            visited[i]= false;
        }
        
        for(let i =0;i<V;i++){ //O(n)
            if(!visited[i]){
                visited[i] = 'B';
                if(!this.checkForBipartite([i,-1,'B'], adj, visited)) return false;
            }
        }
        return true;
    }
    checkForBipartite(v, adj, visited){ //O(E)
        let [elem, parent, color] = v;
      
        for(let i=0;i<adj[elem].length;i++){
                let _elem = adj[elem][i];
                
                if(!visited[_elem] && parent != _elem){
                    const _color = color == 'B' ? 'G': 'B';
                    visited[_elem] = _color;
                    if(!this.checkForBipartite([_elem, elem, _color], adj, visited))return false;
                }else{

                    if(parent != _elem && visited[_elem] == color){
                        return false;
                    }
                }
            }
        return true;
    }
}