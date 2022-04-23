/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function(s, t) {
    let sLen = s.length;
    let tLen = t.length;
    
    if( Math.abs(sLen-tLen) > 1 ) return false;
    let type = 0; //replace;
    if(sLen < tLen) type = 1 // insertion
    else if (sLen > tLen) type = 2 // deletion
    
    let i=0; let j=0; let count = 0;
    while(j < t.length || i < s.length){
        if(s[i]!==t[j]){
             if(count === 1) return false;
            
             if(type === 0 && s[i+1] === t[j+1]) {}//replace
             else if(type === 2 && s[i+1] === t[j]) j-- //delete
             else if(type === 1  && s[i]===t[j+1])i--; // insert
             count++;
        } 
        i++;j++;
    }
    return count===1;
};