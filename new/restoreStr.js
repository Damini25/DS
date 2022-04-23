/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
 */
var restoreString = function(s, indices) {
    
    let str = [];
    
    for(let i=0;i<indices.length;i++){
       str[indices[i]]=s[i];
    }
    
    return str.join('');
};

