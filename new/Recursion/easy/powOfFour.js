/**
 * Link- https://leetcode.com/problems/power-of-four/
 * Input: n = 16
Output: true
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    
    function recur(n){
         if(n<=0) return false;
         if(n===1) return true;
         if(n%4 !== 0) return false;
         return recur(n/4);
    }
    return recur(n);
};