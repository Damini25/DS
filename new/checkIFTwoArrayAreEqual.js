/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let map = {};
    
    for(let i=0;i<target.length;i++){
        if(!map.hasOwnProperty(target[i]))map[target[i]] = 1;
        else map[target[i]]++;
    }
    
    for(let i = 0;i<arr.length;i++){
        if(!map.hasOwnProperty(arr[i]))return false;
        if(map[arr[i]] === 0) return false;
        else map[arr[i]]--;
    }
    
    return true;
};

//***sol 2 */
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    target.sort((a,b)=>a-b)
    arr.sort((a,b)=>a-b);
    
    for(let i=0;i<target.length;i++){
       if(arr[i]!==target[i])return false;
    }
    return true;
};