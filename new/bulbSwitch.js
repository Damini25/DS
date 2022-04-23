/**
 * @param {number} n
 * @return {number}
 * Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on.
*
trick- find divisors less than number value
*[[1],[1,2],[1,3],[1,2,4],[1,5],[1,2,3,6],[1,7],[1,2,4,8],[1,3,9],[1,2,5,10]]
 */
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};