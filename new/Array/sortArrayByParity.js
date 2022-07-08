/**
 * Link- https://leetcode.com/problems/sort-array-by-parity/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let i=0, j=nums.length-1;
    
    while(i<j){
        if(nums[i]%2 !== 0 && nums[j]%2===0){
            let t = nums[j];
            nums[j]= nums[i];
            nums[i]= t;
            i++;j--;
        }else{
            if(nums[i]%2===0) i++;
            if(nums[j]%2!==0) j--;
        }
    }
    return nums;
};