/**
 * @param {string} s
 * @return {number}
 Input: s = "eceba"
Output: 3
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    let map ={};
    let i=0; let maxCount = 0;let left=0;
    while(i<s.length){
        if(!map.hasOwnProperty(s[i])) {
            let keys = Object.keys(map);
            if(keys.length === 2) {
                const toDelete = findLowestIndAndDelete(map);
               // maxCount = Math.max(maxCount, count);
                left = map[toDelete]+1;
                //count = i - map[toDelete];
                delete map[toDelete];
                map[s[i]] = i
            }
            else {
                map[s[i]] = i
               // count++;
            }
        }
        else {
            map[s[i]] = i;
        }
        i++;
        maxCount = Math.max(maxCount, i-left);
    }
    return maxCount;
};

//******  */

var lengthOfLongestSubstringTwoDistinct = function(s) {
    let map ={};
    let i=0; let count = 0;let maxCount = 0; let lowestInd=0;
    while(i<s.length){
        
        if(!map.hasOwnProperty(s[i])) {
            let keys = Object.keys(map);
            if(keys.length === 2) {
                maxCount = Math.max(maxCount, count);
                count = i - lowestInd;
                delete map[s[lowestInd]];
            }
            else count++;
            
            map[s[i]] = i;
            lowestInd=i-1;
        }
        else {
            map[s[i]] = i;
            if(s[i] === s[lowestInd]) lowestInd = i-1;
            count++;
        }
        i++;
    }
    return Math.max(maxCount, count);
};