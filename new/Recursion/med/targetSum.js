/**
 * Link-https://leetcode.com/problems/target-sum/
 * 
 * 
Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 *Time- O(2^n)
 */
var findTargetSumWays = function(nums, target) {
    let memo = {};
    return recur(0,0);
    
    function recur(sum, i){
        let count = 0;
        let key = sum+'_'+i;
        if(sum === target && i === nums.length) return 1;
        if(sum !== target && i === nums.length) return 0;
        if(memo[key]) return memo[key];
        
        count+= recur(sum+nums[i], i+1);
        count+= recur(sum-nums[i], i+1);
        memo[key]=count;
        return count;
    }
    
};