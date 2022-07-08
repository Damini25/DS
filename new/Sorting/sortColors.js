/**
 * Link-https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // T- O(n+n), S-O(1)
var sortColors = function(nums) {
    let countArr = new Array(3).fill(0);
    
    for(let i=0;i<nums.length;i++){
         if(nums[i]===0)countArr[0]++;
         else if(nums[i]===1) countArr[1]++;
         else countArr[2]++;
    }
    
    for(let i=0;i<nums.length;i++){
        if(countArr[0]!== 0){
            nums[i]=0;
            countArr[0]--;
        }else if(countArr[1]!== 0){
            nums[i]=1;
            countArr[1]--;
        }else{
            nums[i]=2;
            countArr[2]--;
        }
    }
    return nums;
};

// using three pointers more optimised
// T-O(N), S-O(1)
var sortColors = function(nums) {
    let low =0, mid=0, high = nums.length-1;
    
    while(mid<=high){
        if(nums[mid] === 0){
            swap(low, mid, nums);
            low++;
            mid++;
        }else if(nums[mid]===1){
           mid++;
        }else{
             swap(mid, high, nums);
             high--;
        }
    }
    return nums;
};
 function swap(first, sec, nums){
        let temp = nums[first];
        nums[first] = nums[sec];
        nums[sec] = temp;
}