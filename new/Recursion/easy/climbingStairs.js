/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let memo = {};
    return recur(n);
    
    function recur(n){
        if(n===0) {
            memo[0]=1;
            return 1;
        }
        
        if(n===1) {
            memo[1]=1;
            return 1;
        }
        
        if(memo.hasOwnProperty(n)) return memo[n];
        
        const res1 =  recur(n-1);
        memo[n-1]= res1;
        
        const res2 =  recur(n-2);
        memo[n-2]= res2;
        
        memo[n]= res1+res2;
        return res1+res2;
    }
};