/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * T- O(n^(k-1))
 * S- O(n)
 */


var kSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let topK = 4
    return findKSum(0, nums.length-1, 0, target, topK);
    
    function findKSum(start, end, sum, target, k){ // O(n ^ (k-1))
        let arr = [];
        if(start === nums.length) return [];
        
        if(arr.length >= topK) return [];
        
        if(sum === target && k === -1) return arr;
        
        if(k === 2) return findTwoSum(start,end, sum, target);
        
        for(let i=start; i<=end; i++){
            if((i===start) || (nums[i]!==nums[i-1])) {
                const kSum = findKSum(i+1, end, sum+nums[i], target - nums[i], k-1);
                for(let j=0; j<kSum.length; j++){
                     arr.push([nums[i], ...kSum[j]])
                }
            }  
        }
        return arr;
    }
    
    function findTwoSum(start, end, target){ //O(n)
        let res= [];
        let s = start, e = end;
        let _tempSum;
        while(s<e){
            _tempSum = nums[s]+nums[e];
            
            if((_tempSum < target) || (nums[s]===nums[s-1] && s > start)){
                s++;
            }else if((_tempSum > target) || (nums[e]===nums[e+1] && e < end )){
                     e--;
            }else{
                res.push([nums[s], nums[e]]);
                s++;e--;
            }
        }
        return res;
    }
};