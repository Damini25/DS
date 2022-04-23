/**
 * Link- https://leetcode.com/problems/set-mismatch/
 * @param {number[]} nums
 * @return {number[]}
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 */
var findErrorNums = function(nums) {
    let i = 0;
   
   while(i<nums.length){
       if(nums[i]!== i+1 && nums[nums[i]-1] !== nums[i]){
              swap(i,nums[i]-1, nums);
       }else {
           i++;
       }
   }
   for(let i=0;i<nums.length;i++){
       if(nums[i]!==i+1){
           return [nums[i],i+1];
       }
   }
   return [];
};

function swap(first, sec, arr){
       let temp = arr[first];
       arr[first]= arr[sec];
       arr[sec] =temp;
}