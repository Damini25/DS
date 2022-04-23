/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * using unionfind
 */

// Total time complexity = O(N)+O(E * @(N) )
// Total space complexity = O(N) + O(1) = O(N)

var countComponents = function(n, edges) {
    if(!edges.length) return n;
    let rootArr=[]; let size=[];
    let count = n;
    
    for(let i = 0;i<n;i++){   // T= O(N)  S= O(N)
        rootArr[i]=i;
        size[i]=1;
    }
    
    for(let i = 0; i<edges.length; i++){   //T= O(E)  S= O(1)
       count = count + union(edges[i][0], edges[i][1], rootArr, size);   //T=@(N) 
    }
    
    return count;
};

 var union = (a, b, rootArr, size) => {
        let rootA = find(a, rootArr);
        let rootB = find(b, rootArr);
        if(rootA===rootB) return 0;

        if(size[rootA] > size[rootB]){
            rootArr[rootB] = rootA;
           // n--;
        }else if(size[rootA] < size[rootB]){
            rootArr[rootA] = rootB;
           // n--;
        }else{
            rootArr[rootB] = rootA;
            size[rootA] += size[rootB];
           // n--;
        }
        return -1;
}

var find = (curr, rootArr) => {
    if(curr === rootArr[curr]) return curr;
    return find(rootArr[curr], rootArr);
}