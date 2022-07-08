const n= 5;
//Link- https://www.geeksforgeeks.org/pascal-triangle/
// Time- O(n*n) , S- O(n)
function createPascalTriangle(n){
	let result = [];
	for(let i=0;i<n;i++){
		let arr = new Array(i+1);
		arr[0] = 1; arr[arr.length-1] = 1;
		for(let j=1;j<arr.length-1;j++){
            const last = result[result.length-1];
			arr[j] = last[j-1] + last[j];
        }
        result.push(arr);
    }
    return result;
}

console.log(createPascalTriangle(10))