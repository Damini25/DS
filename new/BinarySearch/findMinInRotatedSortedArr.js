/**
 * Link- https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 * 
 * Input: nums = [3,4,5,1,2]
Output: 1
 */
var findMin = function(arr) {
    let start = 0, end= arr.length-1, mid=0;
    let pivot = -1;
    while(start<end){
        
        mid = start+Math.floor((end-start)/2);
        if(mid < arr.length-1 && arr[mid+1]<arr[mid]){
           return arr[mid+1];
        }
        
        if(mid >  0 && arr[mid-1]>arr[mid]){
            return arr[mid];
        }
        
        if(arr[start]<=arr[mid]){
            start=mid+1;
        }else{
            end = mid-1;
        }
    }
    return start === arr.length-1 ? arr[0]: arr[start+1];
};