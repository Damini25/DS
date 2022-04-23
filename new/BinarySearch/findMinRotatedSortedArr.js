/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
T-O(log n) Space= O(1) 
*/
var findMin = function(nums) {
    
    let i=0,j=nums.length-1;
    let mid = 0;
    
    if(nums[i]<nums[j])return nums[0];
    
    while(i < j){

        let mid = Math.floor((i+j)/2);
        
        if(mid < nums.length-1 && nums[mid+1]<nums[mid]) return nums[mid+1];
        if(mid > 0 && nums[mid-1]>nums[mid]) return nums[mid];
        
        if(nums[mid] > nums[i]) i= mid+1;
        else j = mid-1;
    }
    return nums[0];
};