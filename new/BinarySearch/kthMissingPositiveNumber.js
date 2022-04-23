/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    let start = 0, end= arr.length-1, mid=0;
    let missingNumbers = 0;

    while(start <= end){
        
        mid = start + Math.floor((end-start)/2);
        missingNumbers = arr[mid]-mid-1; 
        
        if(missingNumbers<k){
            start= mid+1;
        }else {
            end= mid-1;
        }
    }
// return arr[end] + k - (arr[end]-end-1) ;
return start+k;
}