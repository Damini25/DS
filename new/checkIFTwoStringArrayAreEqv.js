/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
 */
var arrayStringsAreEqual = function(word1, word2) {
    let i=0,j=0;
    
    let i1=0; // word1 pointer
    let i2=0; // word2 pointer
        
    while(i<word1.length && j<word2.length){
        let w1 = word1[i];
        let w2= word2[j];
        
        if(w1[i1]!== w2[i2]) return false;
        if(i1===w1.length-1) {
            i++;i1=0;
        }
        else i1++;
        
        if(i2===w2.length-1) {
            i2=0;
            j++;
        }
        else i2++;
    };
    return i!==word1.length || j!==word2.length ? false : true
};