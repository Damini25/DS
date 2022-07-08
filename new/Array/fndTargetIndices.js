/**
 * Link- https://leetcode.com/problems/find-target-indices-after-sorting-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // ********* un-optimized solution ******* T- O(n), S- O(n)
var targetIndices = function(nums, target) {
    let map = {};
    
    for(let i=0;i<nums.length;i++){
        if(!map.hasOwnProperty(nums[i])){
            map[nums[i]]=1
        }else{
            map[nums[i]]+=1;
        }
    }
    
    let indices = [], sInd = -1;
    
    for(let i in map){
        if(target == i){
            for(let j=0;j<map[i];j++){
                sInd++;
                indices.push(sInd);
            }
        }else{
            for(let j=0;j<map[i]; j++){
                sInd++;
            }
        }
    }
    
    return indices;
};

// *************** optimized solution T- O(n), S-O(1)

var targetIndices = function(nums, target) {
    let lesserCount = 0, equalCount =0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]<target){
            lesserCount++;
        }else if(nums[i]=== target){
            equalCount++;
        }
    }
    
    let indices = [], sInd = lesserCount-1;
    
    for(let i=0;i<equalCount;i++){
        sInd++;
        indices.push(sInd);
    }
    
    return indices;
};