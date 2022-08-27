/**
 * Link- https://practice.geeksforgeeks.org/problems/topological-sort/1
 * Mainly used for Directed graphs.
 * T- O(N+E)
 * S- O(N+N) -O(N)
 */

 // using DFS - maintain visited array and push into stack after all adj has been visited
class Solution 
{
    //Function to return list containing vertices in Topological order.
    topoSort(V, adj)
    {
        // code here
        let visited = new Array(V);
        for(let i=0;i<V;i++){
           visited[i]=0;
        }
        
        let stack = [];
        for(let i=0;i<V;i++){
            if(!visited[i]){
                this.getTopologicalSort(i, visited, stack, adj)
            }
        }
        let topoSort=[];
        
        for(let i=stack.length-1;i>=0;i--){
            topoSort.push(stack[i])
        }
        
        return topoSort;
    }
    
    getTopologicalSort(curr, visited, stack, adj){
        visited[curr]=1;
        //stack.push(curr);
        for(let i=0;i<adj[curr].length;i++){
            if(!visited[adj[curr][i]]){
                this.getTopologicalSort(adj[curr][i], visited, stack, adj)
            }
        }
        stack.push(curr);
    }
}

// using BFS- Maintain inDegree, and push if inDegree is zero

topoSort(V, adj)
    {
        // code here
        const inDeg = new Array(V).fill(0);
        
        for(let i=0; i<adj.length; i++){
            for(let j=0; j<adj[i].length; j++){
                inDeg[adj[i][j]]++;
            }
        }
        
        let q = [];
        
        for(let i=0;i<V;i++){
            if(inDeg[i]===0){
                q.push(i);
            }
        }
        let stack = [];
        
        while(q.length){
            let top = q.shift();
            
            stack.push(top);
            
            for(let i=0; i<adj[top].length; i++){
                inDeg[adj[top][i]]--;
                 if(inDeg[adj[top][i]] === 0){
                     q.push(adj[top][i]);
                 }
            }
        }
        
        return stack;
    }