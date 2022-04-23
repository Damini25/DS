/**
 * Link- https://leetcode.com/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 
 Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Time- O(2^n)
 */
var combinationSum2 = function(candidates, target) {
   
    candidates.sort((a,b)=>a-b); //O(n log n)
    let res = [];
   
    
    function findSum(start, newTarget, out){
        if(newTarget< 0 || newTarget > target) return;
        if(newTarget === 0) {
            res.push([...out]);
            return;
        }   
        for(let i=start;i<candidates.length;i++){    
             out.push(candidates[i]);
             findSum(i+1, newTarget-candidates[i], out);
             out.pop();
             while(candidates[i+1]===candidates[i])i++;
        }
        return;
    }
    
    findSum(0, target, []);
    return res;
};