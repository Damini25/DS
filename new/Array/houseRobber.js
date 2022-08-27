/**
 * Link- https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 * T- O(n), S-O(n)
 */
var rob = function(nums) {
    let dp =[]
    let max = -Infinity;
    
    for(let i=0;i<nums.length;i++){
        dp[i] = nums[i];
        max=  Math.max(max, dp[i]);
    }
    
    for(let i=2;i<nums.length;i++){
        dp[i] = nums[i] + Math.max((i-2) >=0 && dp[i-2], (i-3) >=0 && dp[i-3]);
        max= Math.max(max, dp[i]);
    }
    
    return max;
};