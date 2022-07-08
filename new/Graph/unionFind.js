const set = [[1,2], [0,1], [3,4], [5,6] ,[2,5]];


// without rank
function findConnection(n, set) {
  let root = new Array[n]();
  for (let i = 0; i < n; i++) {
    root[i] = i;
  }

  function find(x) { 
    if (x === root[x]) return x;
    return (root[x] = find(root[x]));
  }

  function union(x, y) {
    let rootX = find(x);
    let rootY = find(y);
    if (rootX !== rootY) {
      root[rootY] = rootX;
    }
  }

  function isConnected(x, y) {
    return find(x) === find(y);
  }
}

// with rank ---> more optimised, 
function findWithRank(n, arr){
	let root =  new Array(n);
    let rank = new Array(n);
    
	for(let i=0;i<n;i++){
		root[i]=i;
        rank[i]=1;
    }
	
    function find(x){
    	if(x === root[x]) return x;
    	root[x] = find(root[x]);
        console.log('x',x, root[x])
        return root[x];
    }

    function union(x,y){
    	let rootX = find(x);
    	let rootY = find(y);
        console.log('in union', rootX,rootY)
    	if(rootX !== rootY){
    		if(rank[rootX]>rank[rootY]){
                root[rootY] = rootX;
            }else if(rank[rootX]<rank[rootY]){
                root[rootX] = rootY;
            }else{
                root[rootY] = rootX;
                rank[rootX]+=1;
            }
        }
    }
    function isConnected(x, y) {
        return find(x) === find(y);
    }
}