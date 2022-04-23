/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let map={};
    let result=[];
    for(let i = 0; i<edges.length; i++){
        map[edges[i][1]] = 1;
    }
    for(let i = 0; i<n; i++){
       if(!map.hasOwnProperty(i)) result.push(i)
    };
    return result;
};