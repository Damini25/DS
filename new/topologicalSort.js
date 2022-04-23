// Topological sort- not optimal solution
var canFinish = function(numCourses, prerequisites) {
    let map ={}, visited={}, stack=[], result=[],
   
    // create a map
    for(let i=0;i<prerequisites.length;i++ ){
        if(!map.hasOwnProperty(prerequisites[i][0])) map[prerequisites[i][0]]=[prerequisites[i][1]];
        else map[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    console.log('map',map);
    
    // traverse a map
        for(let i in map){
           if(!visited.hasOwnProperty(i)){
               findSort(+i);
               visited[i]=1;
               stack.push(+i);
           }
        }
  
        function findSort(curr){
            if(map.hasOwnProperty(curr)){
                 if(result.indexOf(curr)!==-1) {
                    return;
                 }
                 else result.push(curr);
               // console.log('result',result,curr);
                for(let i=0;i<map[curr].length;i++){
                    if(!visited[map[curr][i]]){
                        findSort(map[curr][i]);
                        stack.push(map[curr][i]);
                        visited[map[curr][i]]=1;
                        result.pop();
                    }
                }
            }
        }
    //console.log('stack',stack);
    return stack;
  }