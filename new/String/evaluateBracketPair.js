/**
 * Link- https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 * T- O(s)
 * S- O(k)
 */
var evaluate = function(s, knowledge) {
    const knowMap ={};
    for(let [key, value] of knowledge){
        knowMap[key]= value;
    }
   
    let isBraceStarted = false;
    let key=''; let res="";
    
    for(let i=0; i<s.length; i++){
        if(!isBraceStarted){
            if(s[i] === '(') isBraceStarted= true;
            else res+=s[i];
        }else{
            if(s[i] === ')'){
                const val = knowMap[key] ? knowMap[key]: '?'
                res+=val;
                key='';
                isBraceStarted = false;
            }
            else {
                key+=s[i];
            }
        }
    }
    return res;
};