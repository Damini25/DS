/**
 * Link- https://leetcode.com/problems/split-array-largest-sum/
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 * Input: nums = [7,2,5,10,8], m = 2
    Output: 18
    Explanation:
    There are four ways to split nums into two subarrays.
    The best way is to split it into [7,2,5] and [10,8],
    where the largest sum among the two subarrays is only 18.

*  Trick- find min possible and max possible sum then apply binary search to check if current sum 
       is possible with m
 */
var splitArray = function(nums, m) {
    let maxSum = 0 , minSum = 0;
    
    for(let i=0;i<nums.length;i++){
        maxSum+=nums[i];
        minSum = Math.max(minSum, nums[i]);
    }
    
    while(minSum<=maxSum){
        let mid = minSum+Math.floor((maxSum-minSum)/2);
        let sum = 0; let i=0; let countSubArr = 1;
        while(i<nums.length){
            if((sum+nums[i])<=mid){
                sum+=nums[i];
            }else{
                sum=nums[i];
                countSubArr++;
            }
             i++;
        }
        
        if(countSubArr<=m){
            maxSum= mid-1;
        }else{
            minSum= mid+1;  
        }
    }
    return minSum;
};