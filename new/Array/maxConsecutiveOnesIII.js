/**
 * Link- https://leetcode.com/problems/max-consecutive-ones-iii/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let maxCount = 0;
    let i=0,j=0;
    let count = 0;let newK = k;
    
    while(j<nums.length){
        if(nums[j]===1){
            j++;
            count++;
        }else{
            if(newK!==0){
                newK--;
                count++;
                j++;
            }else{
                maxCount = Math.max(count, maxCount);
                if(nums[i]===0){
                    newK++;
                }
                count--;
                i++;
            }
        }
    }
    return Math.max(count, maxCount);
};


// optimised
// T- O(n), S- O(1)

var longestOnes = function(nums, k) {
    let i=0,j=0;
    let newK = k;
    
    while(j<nums.length){
        if(nums[j]===0){
            newK--;
        }
        if(newK<0){
            if(nums[i]===0) newK++;
            i++;
        }
        j++;
    }
    return j-i;
};