/**
 * Link- https://leetcode.com/problems/number-of-good-ways-to-split-a-string/
 * @param {string} s
 * @return {number}
 * T- O(n), S- O(n)
 */
var numSplits = function(s) {
    let map = {};
    let arr1 =[];
    let arr2=[];
    
    for(let i=0;i<s.length;i++){
        if(!map.hasOwnProperty(s[i])){
            map[s[i]]=1;
        }
        arr1[i]=Object.keys(map).length;
    }
    map={};
    for(let i=s.length-1;i>=0;i--){
        if(!map.hasOwnProperty(s[i])){
            map[s[i]]=1;
        }
        arr2[i]=Object.keys(map).length;
    }
  
    let count =0;
    for(let i=0;i<s.length-1;i++){
        if(arr1[i]===arr2[i+1]){
            count++;
        }
    }
    return count;
};