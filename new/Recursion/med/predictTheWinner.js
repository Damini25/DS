/**
 * Link- https://leetcode.com/problems/predict-the-winner/
 * @param {number[]} nums
 * @return {boolean}
 *
 
 Input: nums = [1,5,233,7]
Output: true
Explanation: Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.

Time - O(2^nums.length);
 */
var PredictTheWinner = function(nums) {
    
    return predict(0,nums.length-1,'A',0,0);
    
    function predict(start, end, turn, scoreA, scoreB){
        
        if(start === end){
            if(turn === 'A') {
                scoreA+=nums[start];
                return scoreA >= scoreB;
            }
            if(turn === 'B') {
                scoreB+=nums[start];
                return scoreA < scoreB;
            }
        }
        
        if(turn === 'A'){
            let doesBWins = predict(start+1, end, 'B', scoreA+nums[start], scoreB);
            if(doesBWins){
                let doesBWinsAgain = predict(start, end-1, 'B', scoreA+nums[end], scoreB);
                return !doesBWinsAgain;
            }
            return true;
        }
        else {
            let doesAWins = predict(start+1, end,'A', scoreA, scoreB+nums[start] );
            if(doesAWins){
                let doesAWinsAgain = predict(start, end-1,'A', scoreA, scoreB+nums[end]);
                return !doesAWinsAgain;
            }
            return true;
        }
    }
};