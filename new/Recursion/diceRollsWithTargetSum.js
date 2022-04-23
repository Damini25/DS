/**
 * Link- https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 * 
 * Input: n = 2, k = 6, target = 7
Output: 6
Explanation: You throw two dice, each with 6 faces.
There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.

T- O(n*k) S= O(n*k)
 */
var numRollsToTarget = function(n, k, target) {
    let mod = Math.pow(10, 9) + 7
    let memo = {}
    
    function findTarget(n,k, target){
        let count = 0;
        let key = n+'_'+target
        
        if(target === 0 && n==0) return 1;
        
        if(n <= 0 || target <= 0 ) return 0;
        
        if(memo.hasOwnProperty(key)) return memo[key];
        
        for(let i=1 ;i<=k && i<=target; i++){
            count = (count + findTarget(n-1, k, target-i))%mod;
        }
        memo[key]= count ;
        return count;
    }
    
    return findTarget(n, k, target)
};