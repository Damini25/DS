/**
 * https://www.geeksforgeeks.org/the-earliest-moment-when-everyone-become-friends/
 */
const arr2 = [[0, 1, 4], [3, 4, 5], [2, 3, 14], [1, 5, 24], [2, 4, 12], [0, 3, 42], [1, 2, 41], [4, 5, 11]]

function findFriends(n, arr){
	arr.sort((a,b)=>a[2]-b[2]);
	let curTime;
	let root =  new Array(n);
    let rank = new Array(n);
    let count = n;
    
	for(let i=0;i<n;i++){
		root[i]=i;
        rank[i]=1;
    }
    console.log('sortedArr',arr);

	for(let i=0; i<arr.length;i++){
		currTime = arr[i][2];
		union(arr[i][0], arr[i][1]);
		console.log(root, currTime);
        console.log('rank', rank);
        if(count === 1) return currTime;
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
                // rank[rootX]+=1;
            }else if(rank[rootX]<rank[rootY]){
                root[rootX] = rootY;
                // rank[rootY]+=1;
            }else{
                root[rootY] = rootX;
                rank[rootX]+=1;
            }
            count--;
        }
    }
}