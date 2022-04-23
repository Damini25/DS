
/**
 * 
 *For example, a string such as "substitution" could be abbreviated as (but not limited to):

"s10n" ("s ubstitutio n")
"sub4u4" ("sub stit u tion")
"12" ("substitution")
"su3i1u2on" ("su bst i t u ti on")
"substitution" (no substrings replaced)
The following are not valid abbreviations:

"s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
"s010n" (has leading zeros)
"s0ubstitution" (replaces an empty substring)
Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.

A substring is a contiguous non-empty sequence of characters within a string.
 */

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 * Input: word = "internationalization", abbr = "i12iz4n"
Output: true
Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").
 T- O(n)// Space-O(1)
 */
var validWordAbbreviation = function(word, abbr) {
    let i=0;
    let j=0;
    let numDict = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9};
    
    while(j<word.length && i< abbr.length){
        
        if(abbr[i] !== word[j]){ // check if both are not equal
            if(numDict.hasOwnProperty(abbr[i]) && numDict[abbr[i]] !== 0){ //abbr[i] should be number and not 0
                let n = abbr[i];
                while(numDict.hasOwnProperty(abbr[i+1])){  // increase i if number continues
                    n=n+abbr[i+1];
                    i++;
                }
            
                n = Number(n);
                let c=1;
                while(c<=n){    // increase j as per number
                    j++;c++;
                    if(j>word.length) return false;   // break if number is > word length
                }
                i++;
            }else return false;
        }
        else {
            i++;j++;
        }
    }
    return j>word.length-1 && i > abbr.length-1;
};