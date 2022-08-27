//Link- https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
// T- O(n+klogk), S- O(k)
var minDeletions = function(s) {
    let map ={};
    
    for(let i=0;i<s.length;i++){ //O(n)
        if(!map.hasOwnProperty(s[i])) map[s[i]]=1;
        else map[s[i]]++;
    }
    
    
    let keys = Object.values(map);
    let count =0;
    keys.sort((a,b)=>a-b); //O(klogk)
    
    while(keys.length){ //O(k)
        let top = keys.pop();
        let maxFreqAll = top-1 > 0 ? top-1 : 0;
        if(maxFreqAll < keys[keys.length-1] && keys[keys.length-1]>0){
            count+=(keys[keys.length-1]- maxFreqAll);
            keys[keys.length-1] = maxFreqAll;
        }
    }
       
    return count;
};