/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    
    function recur(num, steps){
        if(num===0) return steps;
        if(num & 1 === 1) return recur(num-1, steps+1); // number is odd or num%2 !==0
        else return recur(num/2, steps+1);
    }
    
    return recur(num, 0);
};