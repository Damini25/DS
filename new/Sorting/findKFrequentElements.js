/**
 * Link- https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * T- O(nlogn), S-O(n)
 */
var topKFrequent = function(nums, k) {
    let map = {};
    for(let i=0;i<nums.length;i++){
        if(map.hasOwnProperty(nums[i])){
            map[nums[i]]+=1;
        }else{
            map[nums[i]]=1;
        }
    }
    
    const sortedEntries = Object.entries(map).sort((a,b)=>b[1]-a[1]);
    
    let res=[];
    for(let i=0;i<k;i++){
        res.push(sortedEntries[i][0]);
    }
    return res;
};