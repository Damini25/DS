/**
 * Link- https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * T- O(s.w.s), S- O(s)
 */
var wordBreak = function(s, wordDict) {
    let table = new Array(s.length+1).fill(false);
    
    table[0]= true;
    
    for(let i=0;i<s.length;i++){ //O(s)
        if(!table[i]) continue;
        
        for(let word of wordDict){ //O(w)
            let newWord = s.slice(i, word.length+i); //O(s)
            if(newWord === word) table[i + word.length] = true;
        }
    }
    
    return table[s.length];  
};