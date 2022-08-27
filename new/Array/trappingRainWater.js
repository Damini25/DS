/**
 * Link- https://leetcode.com/problems/trapping-rain-water/
 * T- O(n), S- O(n)
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let count = 0;
    
    let leftMax = [];
    let rightMax=[];
    
    for(let i=0;i<height.length;i++){
        if(i>0)leftMax[i]= Math.max(leftMax[i-1], height[i]);
        else leftMax[i]=height[i];
    }
    
    for(let i=height.length-1;i>=0;i--){
        if(i<height.length-1)rightMax[i]= Math.max(rightMax[i+1], height[i]);
        else rightMax[i] = height[i];
    }
    
    for(let i=0;i<height.length;i++){
        count= count + (Math.min(leftMax[i], rightMax[i])-height[i]);
    }
    
    return count;
};