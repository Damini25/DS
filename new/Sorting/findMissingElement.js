/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [3,0,1]
 *  Output: 2
 * Range - 0 to n
 * T- O(n), s-O(1)
 */
var missingNumber = function(nums) {
    let i=0;
    while(i<nums.length){
        if(nums[i]===nums.length) i++;
        else if(i!==nums[i]){
            //while(nums[i]!==i){
              // if(nums[i]===nums.length) break;
                let temp = nums[nums[i]];
                nums[nums[i]] = nums[i];
                nums[i] = temp;
           // }
        }else {
            i++;
        }
    }
   // console.log(nums);
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==i)return i;
    }
    return nums.length;
};