/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Time- O(n+m)
vertex+edges
 */
var cloneGraph = function(node) {
    if(!node) return null;
    let seen = {};
    function clone(curr, neigh){
        if(seen[curr]) {
            return seen[curr];
        }else{
            let newNode = new Node();
            newNode.val = curr;
            let newNeigh=[];
            if(neigh.length){
                for(let i=0;i< neigh.length;i++){
                  seen[newNode.val] = newNode;
                  newNeigh.push(clone(neigh[i].val, neigh[i].neighbors));
                }
             }
            newNode.neighbors = newNeigh;
            
            return newNode;
        }
    }
    return clone(node.val,node.neighbors);
};