/**
 * Link- https://practice.geeksforgeeks.org/problems/topological-sort/1
 * Mainly used for Directed graphs.
 * T- O(N+E)
 * S- O(N+N) -O(N)
 */
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