/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
 */
var nextGreaterElement = function(nums1, nums2) {
    let nextInd = {};
     let i = 0;
     
     while(i<nums2.length){
         let j =i+1;
         
         if(!nextInd.hasOwnProperty(nums2[i])){
             while(j<nums2.length){
                 if(nums2[j+1]>nums2[j]){
                     nextInd[nums2[j]]=nums2[j+1]; 
                 }
                 if(nums2[j]>nums2[i]){
                     nextInd[nums2[i]]=nums2[j]; 
                     break;
                 }else{
                     j++;
                 }
             }
             if(j>nums2.length-1){
                 nextInd[nums2[i]] = -1;
             }
         }
         
         i++;
     }
     let result =[];
     for(let i=0;i<nums1.length;i++){
         result.push(nextInd[nums1[i]]);
     }
     return result;
 };