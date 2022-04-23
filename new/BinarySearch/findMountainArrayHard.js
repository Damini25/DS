/**
 * 
 * Link- https://leetcode.com/problems/find-in-mountain-array/
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

 /**
* Trick- Find peak index, serach in left part of not found, go to right
  */
/**
 * Input: array = [1,2,3,4,5,3,1], target = 3
Output: 2
Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let length = mountainArr.length();
    
    let mountainInd = findMountainIndex(length);
    
    let findElemInFirstHalf = searchElem(0,mountainInd, true) // searchLeft
    if(findElemInFirstHalf!==-1){
        return findElemInFirstHalf;
    }else {
        findElemInFirstHalf =  searchElem(mountainInd,length-1, false);
    }
    return findElemInFirstHalf!==-1 ? findElemInFirstHalf : -1;
    
    function findMountainIndex(length){
        let start = 0, end = length-1;
        let mid = 0;
        while(start<end){
            mid = start+ Math.floor((end-start)/2);
            let midElem = mountainArr.get(mid);
            let midNext = mountainArr.get(mid+1);
            if(midElem < midNext){
                start=mid+1;
            }else{
                end= mid;
            }
        }
        return end;
    }
    
    function searchElem(start, end, isLeft){
        while(start<=end){
            let mid = start+Math.floor((end-start)/2);
            let midElem = mountainArr.get(mid);
            if(midElem === target) return mid;
            if(midElem < target){
                if(isLeft) start= mid+1;
                else end= mid-1;
            }else{
                 if(isLeft) end= mid-1;
                 else start= mid+1;
            }
        }
        return -1;
    }
};