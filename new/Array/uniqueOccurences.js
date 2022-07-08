/**
 * Link- https://leetcode.com/problems/unique-number-of-occurrences/
 * 
 * @param {number[]} arr
 * @return {boolean}
 * T-O(n), S-O(n)
 */
var uniqueOccurrences = function(arr) {
    let map={};
    for(let i=0;i<arr.length;i++){
        if(!map.hasOwnProperty(arr[i])){
            map[arr[i]]=1;
        }else{
            map[arr[i]]+=1;
        }
    }
    
    let map2={};
    for(let i in map){
        if(!map2.hasOwnProperty(map[i])){
            map2[map[i]]=1;
        }else{
            return false;
        }
    }
    
   return true;
    
};