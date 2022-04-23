/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
//****** optmised graph approach */

var validTree = function(n, edges) {
    if(edges.length !== n-1) return false;
    
    let rootArr = new Array(n).fill(0).map((item,i) => i);
    let size = new Array(n).fill(1);
    
    
    for(let [first,sec] of edges){
        if(!Union(first, sec)) return false;
    }
    
    function Union(a,b) {
        const rootA = find(a);
        const rootB = find(b);
        if(rootA === rootB) return false;
        
        if(size[rootA] > size[rootB]){
            rootArr[b] = rootA;
        }else if(size[rootB] > size[rootA]){
            rootArr[a] = rootB;
        }else{
            rootArr[b] = rootA;
            size[rootA] += size[rootB];
        }
        return true;
    }
    
    function find(curr) {
        if(rootArr[curr] === curr) return curr;
        return find(rootArr[curr], rootArr);
    }
    
    return true;
};

 //********unoptimised dfs approach */
var validTree = function(n, edges) {
    
    if(edges.length !== n-1) return false;
    let rootArr = new Array(n).fill(0).map((item,i) => i);
    let root = 0; let map={0:1}
    
    for(let [first,sec] of edges){
        if(rootArr[first] === 0 && rootArr[sec]=== 0) return false; // cycle exists
        else {
            if(rootArr[sec] === 0){
                update(first, rootArr);
            }else if(rootArr[first] === 0){
                 update(sec, rootArr);
            }else{
                rootArr[sec] = find(first, rootArr );
            }
           
        }
    };
    
   let i=0;
   while(i< n ){
       if(rootArr[i]!==0){
           const root = find(i,rootArr);
           if(root!==0) return false;
       }
       i++;
   }
    return true;
};

var find = (curr, rootArr) => {
    if(rootArr[curr] === curr) return curr;
    return find(rootArr[curr], rootArr);
}

var update = (curr,rootArr) => {
    if(curr === rootArr[curr]) {
         rootArr[curr] = 0;
        return;
    }
     update(rootArr[curr], rootArr);
     rootArr[curr] = 0;
    return;
}