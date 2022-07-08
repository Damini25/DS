//Link- https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/
// Link- https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
const arr = [-2,1,-3,4,-1,2,1,-5,4];

// Un-optimized - O(n*n)
function findMaxSumSubArray(arr){
	let sum = -Infinity;
	for(let i=0;i<arr.length;i++){
		let s =  arr[i]; let currS = arr[i];
		for(let j=i+1;j<arr.length;j++){
            currS+=arr[j]
			s = Math.max(s, arr[j], currS);
           
        }
     
      sum = Math.max(s, sum);
    }
  return sum;
}

// O(n) using Kadane's Algorithm ,
// trick -> keep track of maxEnding till now if negative then set as zero 

function findMaxSumSubArray(arr){
	let sum = -Infinity;
    let maxEnding = 0;
  
	for(let i=0;i<arr.length;i++){
		maxEnding+=arr[i];
        if(maxEnding<0) maxEnding =0;
        sum = Math.max(sum, maxEnding);
    }
  return sum;
}

console.log(findMaxSumSubArray(arr))