/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * 
***
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
***
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
***
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

*/
var isAlienSorted = function(words, order) {
    let dict={}
    for(let i=0;i<order.length;i++){
        dict[order[i]]=i;
    }
    
    for(let i=1; i<words.length;i++){
        let curr = words[i];
        if(dict[words[i-1][0]] > dict[words[i][0]]) return false;
        if(words[i][0]=== words[i-1][0]){
            const compare =  compareTwoWords(words[i-1],curr)
             if(!compare) return false;
        }
    }
  
    return true;
    
    function compareTwoWords(w1, w2){
        let i = 0;
        let j = 0;
        
        while(i<w1.length){
            if(!w2[j]) return false;
            if(dict[w1[i]]>dict[w2[j]]){
               return false;
            }else if(dict[w1[i]]<dict[w2[j]]){
                     i++;
            }else{
                 i++;j++;
            }
        }
        return true;
    }
};