/**
 * Link- https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 */
var findDuplicates = function(nums) {
    let i = 0; let res= {};
    
    while(i<nums.length){
        if(nums[i]!== i+1){
            if(nums[nums[i]-1] !== nums[i]){
               swap(i,nums[i]-1, nums);
             }else{
                res[nums[i]]=1;
                i++;
             }
        }else {
            i++;
        }
    }
    return Object.keys(res);
};

function swap(first, sec, arr){
        let temp = arr[first];
        arr[first]= arr[sec];
        arr[sec] =temp;
 }