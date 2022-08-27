/**
 * Link- https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 * T- O(E+N), S - O(E)
 */
var findSmallestSetOfVertices = function(n, edges) {
    let map = {};
    
    for(let i=0;i<edges.length;i++){
        let [x,y]= edges[i]
        if(!map.hasOwnProperty(y)){
            map[y] = [x];
        }else{
            map[y].push(x);
        }
    }
    
    let result= [];
    
    for(let i=0;i<n;i++){
        if(!map.hasOwnProperty(i)){
            result.push(i);
        }
    }
    
    return result;
};