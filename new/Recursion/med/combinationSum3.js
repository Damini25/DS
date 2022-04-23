/**
 * Link- https://leetcode.com/problems/combination-sum-iii/
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * 
 * Input: k = 3, n = 9
 * Output: [[1,2,6],[1,3,5],[2,3,4]]
 */
var combinationSum3 = function(k, n) {
    
    let res= [];
    
    findSum(1, k, n, []);
    return res;
    
    function findSum(start, len, target, out){
        if(target===0 && len === 0){
            res.push([...out]);
        }
        if(target<0 || target>n) return;
        
        for(let i = start; i<=9; i++){
            out.push(i);
            findSum(i+1,len-1, target-i, out);
            out.pop();
        }
        
        return ;
    }
    
};