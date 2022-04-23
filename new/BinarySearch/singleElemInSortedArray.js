/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

 */
var singleNonDuplicate = function(nums) {
    let left =0 , right= nums.length-1;
    let mid = -1;
    while(left<right){
         mid = Math.floor((left+right)/2);
        if(nums[mid-1]!==nums[mid] && nums[mid+1]!==nums[mid]) return nums[mid];
        if(mid%2==0){
            if(nums[mid-1]===nums[mid]){
                right=mid-1
            }else left=mid+1;
        }else{
            if(nums[mid-1]===nums[mid]){
                left=mid+1;
            }else right=mid-1
        }
    }
    return nums[left];
};