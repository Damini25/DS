/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * T- O(N+E)
 */
var canFinish = function(numCourses, prerequisites) {
    let adjList = {}; let visited={}; let dfsVisited={};
    
    for(let i=0;i<prerequisites.length;i++){
        let [x,y] = prerequisites[i];
        if(!adjList.hasOwnProperty(x)){
            adjList[x]=[y];
        }else{
            adjList[x].push(y);
        }
    }
    
  //  console.log('adjList', adjList);
    
    for(let i=0;i<numCourses;i++){
        if(!visited.hasOwnProperty(i)){
           if(checkForCycle(i)){
            //   console.log(1)
               return false;
           } 
        }
    }
    
    return true;
    
    // 0:[1,3], 1:[3],3:[4],
    
    function checkForCycle(course){
     //   console.log(course)
        
        const list = adjList[course];
        
        dfsVisited[course]=true;
        visited[course]= true;
        
        if(list && list.length){
            for(let i=0;i<list.length;i++){
                if(dfsVisited[list[i]] && visited[list[i]]){
                   // console.log('dfs', list[i], course)
                    return true
                } ;
                if(!dfsVisited.hasOwnProperty(list[i])) {
                    if(checkForCycle(list[i])) {
                       // console.log('cuyc' )
                        return true;
                    }
                }
               dfsVisited[list[i]]= false;
            }
        }
        
        dfsVisited[course]=false;
        return false;
    }
    
};