/**
 * Link- https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 * Input: secret = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in secret and its index is 4.

// Trick one take length- 0 to target+1;
// trick two-  0-1, 2-5, 6-13 etc - start with size of 2 then 4,8,16,32
 start =0 end=1=>, size=end-start if(n[end]<target) new start= end+1 , end = end +((end-start+1)*2)), start= newStart;
 */
var search = function (reader, target) {
    let start= 0;
    let startElem = reader.get(0);
    if(target < startElem) return -1;
    let end = target-startElem;
    let mid = 0;
    let maxLimit = Math.pow(2,31)-1;
    while(start<=end){
        mid= start+Math.floor((end-start)/2);
        const midElem = reader.get(mid);
        
        if(midElem === maxLimit) end = mid-1;
        else if(midElem === target) return mid;
        else if(midElem< target){
            start=mid+1
        }else{
            end= mid-1;
        }
    }
    return -1;
};