/**
 * Link- https://leetcode.com/problems/minimum-absolute-difference/
 * T- O(nlogn), S-O(n);
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
   
    let minDiff = Infinity;
    
    for(let i=0;i<arr.length-1;i++){
        minDiff= Math.min(minDiff, arr[i+1]-arr[i])
    }
    
    let res=[];
    
    for(let i=0;i<arr.length-1;i++){
       if(minDiff === arr[i+1]-arr[i]){
           res.push([arr[i],arr[i+1]])
       }
    }
    return res;
};