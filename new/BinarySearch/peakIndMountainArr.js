/**
 * Link- https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * @param {number[]} arr
 * @return {number}
 * Input: arr = [0,1,0]
* Output: 1

 */
var peakIndexInMountainArray = function(arr) {
    let start = 0, end= arr.length-1;
    let mid=0;
    
    while(start<end){
        mid= start+ Math.floor((end-start)/2);
        if(arr[mid]< arr[mid+1]){
            start= mid+1;
        }else{
            end= mid;
        }
    }
    return end;
};