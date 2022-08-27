/**
 * @param {string} s
 * @return {string}
 * T- O(n), S- O(n)
 */
var reverseWords = function(s) {
    let i=s.length-1;
    let str = "";
    let wordStart = false;
    let res = ""
    
    while(i>=0){
        if(wordStart){
            if(s[i]===' '){
                res = res ? res + ' ' + str :  str;
                str='';
                wordStart = false;
            }else{
                str=s[i]+str;
            }
        }else{
            if(s[i]!==' '){
                str= s[i];
                wordStart = true;
            }
        }
        i--;
    }
    return str && res ? res + ' ' + str : str ? str : res;
};