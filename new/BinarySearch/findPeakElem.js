/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 */
var findPeakElement = function(nums) {
    if(nums.length===1) return 0;
    let i=0,j=nums.length-1;
    while(i<=j){
       // console.log(i,j)
        let mid = Math.floor((i+j)/2);
        
        if(nums[mid-1]<nums[mid] && nums[mid+1]<nums[mid]) return mid;
        if(nums[mid-1]<nums[mid] && mid === nums.length-1) return mid;
        if(nums[mid+1]<nums[mid] && mid === 0) return mid;
        
        if(nums[mid+1]>nums[mid]){
            i = mid+1;
        }else if(nums[mid-1]>nums[mid]){
            j = mid-1;
        }
    }
    return nums.length-1
};