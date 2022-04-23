/**
 * Missing Element in Sorted Array
 * Input: nums = [4,7,9,10], k = 3
 * Output: 8
 * Explanation: The missing numbers are [5,6,8,...], hence the third missing number is 8.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    let start = 0, end=nums.length-1; 
    
    while(start<end){
        let mid = Math.floor((start+end)/2);
        
        let missingCount = countMissingNumbers(start, mid, nums);
        
        if(start === mid){
           missingCount = countMissingNumbers(start, end, nums);
           if(missingCount >= k )return nums[start]+k;
           else return nums[end]+k-missingCount;
        }
        
        if(missingCount >= k){
            end= mid;
        }else{
            k = k-missingCount;
            start= mid;
        }
    }
    return nums[end]+k;
};

var countMissingNumbers = (from, to, nums) =>{
    let expectedCount = nums[to]-nums[from] - 1;
    let actualCount = to-from-1;
    return expectedCount - actualCount;
}