/**
 * Link- https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * T- O(m+n), S-O(1)
 */
var merge = function(nums1, m, nums2, n) {
    if(!n) return nums1;
    let i=m-1, j=n-1;
    let k = nums1.length-1;
    
    while(i>=0 && j>=0){ //O(m)
        if(nums1[i]>nums2[j]){
            nums1[k]= nums1[i];
            i--;
        }else{
            nums1[k]= nums2[j];
            j--;
        }
        k--;
    }
    
    while(j>=0){ 
        nums1[k]= nums2[j];
        k--;
        j--;
    }
    
    return nums1;
};