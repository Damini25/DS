/**
 * Link- https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 * Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true

Trick- If start==end==mid then start--and end--
 */
var search = function(arr, target) {
    const pivot = findPivotInArrayWithDuplicates();
    if(target === arr[pivot]) return true;
    
    if(target >=  arr[0]){
        return findElement(0, pivot-1);
    }else{
        return findElement(pivot+1, arr.length-1);
    }
    
    function findPivotInArrayWithDuplicates(){
        let start = 0, end = arr.length-1;
        let mid =0;
        while(start<end){
            mid = start+Math.floor((end-start)/2);
             if(mid < arr.length-1 && arr[mid+1] < arr[mid]) return mid;
             if(mid >0 && arr[mid-1] > arr[mid]) return mid-1;
            
            if(arr[start] == arr[end] && arr[end] == arr[mid]){
                if(arr[start+1] < arr[start]) return start;
                start++;
                if(arr[end-1] < arr[end]) return end;
                end--;
            }
            else if(arr[start]<= arr[mid]){
                start = mid+1;
            }else{
                end= mid-1;
            }
        }
        return start;
    }
    
    function findElement(start, end){
        let mid = 0;
        while(start<=end){
            mid = start+Math.floor((end-start)/2);
            if(arr[mid]=== target) return true;
            if(arr[mid]< target){
                start = mid+1;
            }else{
                end= mid-1;
            }
        }
        return false;
    }
};