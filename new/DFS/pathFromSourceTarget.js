/**
 * Link- https://leetcode.com/problems/all-paths-from-source-to-target/
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let target = graph.length-1;
    let out = [];
    
    function findPaths(source, pathArray){
        if(source===target){
            pathArray.push(source);
            out.push(pathArray);
            return;
        }
        
        const paths = graph[source];
        for(let i= 0;i< paths.length;i++){
            findPaths(paths[i], [...pathArray, source])
        }
        return;
    }
    
    findPaths(0, []);
    return out;
};