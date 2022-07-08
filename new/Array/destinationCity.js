/**
 * Link- https://leetcode.com/problems/destination-city/
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const source ={};
    
    for(let [s,d] of paths){
        source[s]=1;
    }
    
    for(let [s,d] of paths){
        if(!source.hasOwnProperty(d)) return d;
    }
    
};