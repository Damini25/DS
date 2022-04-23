/**
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length!==goal.length) return false;
    if(goal === s)return true;
   
   let i=0;let j=0;
   while(i<s.length){
       if(s===goal)return true;
       s = s.substr(1) + s.substr(0,1); 
       i++;
   }
   
   return false;
};