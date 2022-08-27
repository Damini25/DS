/**
 * Link- https://leetcode.com/problems/custom-sort-string/
 * @param {string} order
 * @param {string} s
 * @return {string}
 * T- O(n), S- O(n)
 */
var customSortString = function(order, s) {
    let sMap={};
    s=s.split('');
    let newS='';
    
    for(let i=0;i<s.length;i++){
        if(!sMap.hasOwnProperty(s[i])){
            sMap[s[i]]= s[i];
        }else{
            sMap[s[i]]+=s[i];
        }
    }
    
    let i=0,j=0;
    
    while(i<order.length){
        if(sMap.hasOwnProperty(order[i])){
            const key = sMap[order[i]];
            newS+=key;
            delete sMap[order[i]];
        }
        i++;
    }
    
    for(let i in sMap){
        newS+=sMap[i];
    }
    
    return newS;
};