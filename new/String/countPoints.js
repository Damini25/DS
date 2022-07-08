/**
 * Link- https://leetcode.com/problems/rings-and-rods/
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let rodMap = {};
    let count=0;
    
    for(let i=0; i<rings.length; i=i+2){
        if(!rodMap.hasOwnProperty(rings[i+1])){
            rodMap[rings[i+1]] = {
                [rings[i]]:1
            }
        }else{
            if(!rodMap[rings[i+1]].hasOwnProperty(rings[i])){
                rodMap[rings[i+1]][rings[i]] = 1;
                
                if(Object.keys(rodMap[rings[i+1]]).length===3){
                    count++;
                }
            }
        }
    }
    
    return count;
};