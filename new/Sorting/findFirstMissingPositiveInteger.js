/**
 * Link- https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [1,2,0]
 * Output: 3
 * T- O(n), S - O(1) 
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    
    while(i<nums.length){
        if(nums[i] < 1 || nums[i] > nums.length){
            i++;
        }else{
            if(nums[nums[i]-1] !== nums[i]){
                swap(i,nums[i]-1, nums);
            }else i++;
        }
    }
    
    let missingNumber = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=1  && nums[i]<=nums.length){
            if(nums[i]!==missingNumber) return missingNumber;
            else missingNumber++;
        }
    }
    return missingNumber;
};

function swap(first,sec,arr){
    let temp= arr[first];
    arr[first] = arr[sec];
    arr[sec]= temp;
}