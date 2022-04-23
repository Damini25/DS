/**
Link- https://leetcode.com/problems/next-greater-element-i/
Monotonic stack
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map ={};  // store the next greater element of nums2[i] if available
    let result = new Array(nums1.length);
    let stack = []; // store in decreasing order;
    let i = 0;
    while(i<nums2.length){ 

        if(!stack.length) stack.push(nums2[i]);
        else{
            if(nums2[i] > stack[stack.length-1]){ // if element is greater than last one in stack than pop till last is smaller #decreasingOrderBreach
                while(stack.length){
                    let last = stack[stack.length-1];
                    if(nums2[i]>last){
                        map[last] = nums2[i];
                        stack.pop();
                    }else break;
                }
            }
            stack.push(nums2[i]); 
        }
        i++;
    }

    // get the result
    for(let i =0; i<nums1.length;i++){
        if(map.hasOwnProperty(nums1[i])){
            result[i] = map[nums1[i]];
        }else {
            result[i] = -1;
        }
    }
    
    return result;
};