/**
 * Link- https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let i=0,j=0;
    let maxLen =0;
    
    while(i < s.length && j<s.length){
        if(!map.hasOwnProperty(s[j])){
            map[s[j]]=j;
            maxLen = Math.max(maxLen, j-i+1);
            j++;
        }else{
           delete map[s[i]];
           i++;
        }
    } 
    return maxLen;
};