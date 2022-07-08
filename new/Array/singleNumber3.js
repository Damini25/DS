/**
 * Link- https://leetcode.com/problems/single-number-iii/
 * @param {number[]} nums
 * @return {number[]}
 * T- O(1), S-O(n)
 */
var singleNumber = function(nums) {
    if(nums.length===2) return nums;
    let set=new Set();
    
    for(let i=0;i<nums.length;i++){
        if(!set.has(nums[i])){
            set.add(nums[i]);
        }else{
            set.delete(nums[i]);
        }
    }
    return Array.from(set);
};