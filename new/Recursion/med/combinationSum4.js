/**
 * Link- https://leetcode.com/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let memo={};
    nums.sort((a,b)=>a-b);
    
    function findSum(sum , arr){
        let count=0;
        if(sum > target) return 0;
        if((sum===target)) {
            return 1;
        }
        if(memo.hasOwnProperty(sum)) return memo[sum];
        
        for(let i=0;i<nums.length;i++){
           if(sum<=target){
                arr.push(nums[i]);
                count+=findSum(sum+nums[i], arr);
                arr.pop();
            }else {
                return;
            }
        }
       
        memo[sum] = count;
        return count;
    }
    
    return findSum(0,[]);
};