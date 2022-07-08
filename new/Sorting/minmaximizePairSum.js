/**
 * Link- https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/
 * @param {number[]} nums
 * @return {number}
 */

 // *** little un optimised 

 var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    
    let i=0, j=nums.length-1;
    let max = -Infinity;
    while(i<j){
        max = Math.max(max, nums[i]+nums[j]);
        i++;j--;
    }
    return max;
};

// *** little optimised 
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    
    let i=0, len=nums.length/2;
    let max = -Infinity;
    
    while(i<len){
        max = Math.max(max, nums[i]+nums[nums.length-i-1]);
        i++;
    }
    return max;
};