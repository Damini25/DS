/**
 * Link- https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Time Complexity - O(2^k) where k is the sum of target/candidate[i] from i = 0 to size of candidate - 1.
Auxillary Space Complexity - O(length_of_longest_combination).
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a-b);
    
    let res = [];
    
    function findSum(arr, tar, out, start){
       //console.log('fir', tar, out, start)
        if(tar < 0) return ;
        if(tar === 0){
           res.push([...out]);
           return;
        }
        if(arr[0] > tar) return;
        for(let i = start;i<arr.length;i++){
             out.push(arr[i]);
             findSum(arr, tar-arr[i] , out, i);
             out.pop();
        }
        return;
    }
    
    findSum(candidates, target, [], 0);
    return res;
};