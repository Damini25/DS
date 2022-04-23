/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 * 0-not visited yet(white), 1 - in process (grey), 2 - has been processed(black)
 */
var leadsToDestination = function(n, edges, source, destination) {
    let adjList = [];
    let color = new Array().fill(0);
    for (let i=0;i<n;i++){
        adjList.push([]);
    };
    for (let [first,sec] of edges){
        adjList[first].push(sec);
    };
    color[source] = 2;
    return dfs(source, destination, adjList, color );
};

var dfs = (curr, destination, adjList, color) => {
    
     if(color[curr] === 1) return false;  //if gray
    
     if(!adjList[curr].length ) return curr === destination; 
     
     color[curr]=1; // set gray
   
     for( let i = 0; i<adjList[curr].length; i++ ){
            let res = dfs(adjList[curr][i], destination, adjList, color);
            if(!res) return false;
     };
    color[curr]=2; // set black
    return true;
}