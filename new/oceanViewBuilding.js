/**
 * @param {number[]} heights
 * @return {number[]}
 * Input: heights = [4,2,3,1]
Output: [0,2,3]
 */
var findBuildings = function(heights) {
    let stack =[]; 
    let max= -Infinity;
    for(let i=heights.length-1 ; i>=0 ; i--){
        if(heights[i]>max){
            stack.push(i);
            max= heights[i];
        }
    };
    let res=[];
    for(let i=stack.length-1;i>=0;i--){
        res.push(stack[i]);
    };
    return res;
};