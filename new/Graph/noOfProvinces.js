/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let root = new Array(isConnected.length);
    let rank=[]; let provinces = root.length;
    for(let i=0;i<root.length;i++){
        root[i]=i;
        rank[i]=1;
    }
    
    for(let i=0;i<root.length;i++){
        for(let j=0;j<root.length;j++){
            if(i!==j && isConnected[i][j]===1){
                union(i,j);
            }
        }
    }
    
    return provinces;
    
    function find(x){
        if(x===root[x]) return x;
        root[x] = find(root[x]);
        return root[x];
    }
    
    function union(x,y){
        let rootX = find(x);
        let rootY = find(y);
        
        if(rootX!==rootY){
            if(rank[x]>rank[y]){
                root[rootY]= rootX;
            }else if(rank[x]<rank[y]){
                root[rootX]= rootY;
            }else{
                root[rootY]= rootX;
                rank[x]+=1;
            }
            provinces--;
        }
    }
    
};