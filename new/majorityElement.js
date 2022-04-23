/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
 */
var majorityElement = function(nums) {
    let times =  Math.floor(nums.length/3);
    let map ={};let res= {};
    
    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]])map[nums[i]]=1;
        else map[nums[i]]++;
        if(map[nums[i]] > times)res[nums[i]]=1;
    }
    
    return Object.keys(res);
};