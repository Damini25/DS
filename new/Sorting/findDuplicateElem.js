/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [1,3,4,2,2]
 *  Output: 2
 */
var findDuplicate = function(nums) {
    let i=0;
    while(i<nums.length){
        if(nums[nums[i]-1]!==nums[i]){
            swap(i, nums[i]-1, nums);
        }else {
            if(nums[i]!== i+1) return nums[i];
            i++;
        }
    }
    return nums[nums.length-1];
};

function swap(first, sec, arr){
        let temp = arr[first];
        arr[first]= arr[sec];
        arr[sec] =temp;
 }