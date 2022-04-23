/**
 * @param {number[]} nums
 * @return {number[]}
 * Time- O(n)
 * Space - O(2n);
 * Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
 */
var getConcatenation = function(nums) {
    let n = nums.length;
    let ans = new Array(n*2);
    let i = 0;
    while(i<nums.length){
        ans[i]=nums[i];
        ans[i+n] = nums[i];
        i++;
    }
    return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Time- O(n)
 * Space - O(n);
 */
var getConcatenation = function(nums) {
    let n = nums.length;
    let i = 0;
    while(i< n){
        nums.push(nums[i]) ;
        i++;
    }
    return nums;
};