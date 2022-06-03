/**
 * Link- https://leetcode.com/problems/find-the-most-competitive-subsequence/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 
 Input: nums = [3,5,2,6], k = 2
Output: [2,6]
Explanation: Among the set of every possible subsequence: {[3,5], [3,2], [3,6], [5,2], [5,6], [2,6]}, [2,6] is the most competitive.

Time- O(n), S- O(n)
 */
var mostCompetitive = function(nums, k) {
    if(k > nums.length) return [];
    if(k === nums.length) return nums;
    let s = [nums[0]];

    for(let i=1; i<nums.length; i++){
        if(s.length<=k){
            if(nums[i]< s[s.length-1]){
                let cIndLen = nums.length - i;
                let stackNeededLen = k - s.length;
                while(nums[i]< s[s.length-1] && cIndLen > stackNeededLen){
                      s.pop();
                      stackNeededLen++;
                }
            s.push(nums[i]);
            }else{
                if(s.length < k) s.push(nums[i]);
            }
        }
    }
    return s;
};