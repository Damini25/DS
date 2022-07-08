/**
 * Link- https://leetcode.com/problems/subsets/
 * T-O(N * 2^N), S-O(N)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[[]];
    
    for(let i=0;i<nums.length;i++){ //O(N)
        backTrack([], 0 , i+1);
    }
    
    function backTrack(curr,start, k){ //O(2^N)
        if(curr.length===k){
            res.push([...curr]);
            return;
        }
           
        for(let i=start;i<nums.length;i++){
            curr.push(nums[i]);
            backTrack(curr, i+1, k);
            curr.pop();
        }
    }
    
    return res;
};