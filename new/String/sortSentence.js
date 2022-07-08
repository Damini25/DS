/**
 * Link-https://leetcode.com/problems/sorting-the-sentence/
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let res = [];
    let str='';
    
    for(let i=0;i<s.length;i++){
        if(s[i] !== ' '){
            if(s[i]>=0 && s[i]<=9){
                res[s[i]-1]=str;
                 str ='';
            }else{
                str+=s[i];
            }
        }
    }
  
   return res.join(' ');
};