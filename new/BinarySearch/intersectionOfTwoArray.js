/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map={}; let res =[]; // space O(n1);
    
    for(let i =0;i<nums1.length;i++){ //O(n1)
        if(map.hasOwnProperty(nums1[i])) map[nums1[i]]= map[nums1[i]]+1;
        else  map[nums1[i]] =1;
    }
    
    for(let i =0;i<nums2.length;i++){ //O(n2)
        if(map.hasOwnProperty(nums2[i]))  {
           map[nums2[i]]--;
            res.push(nums2[i]);
        }
        if( map[nums2[i]]===0) delete  map[nums2[i]];
    }

    return res;
};