/**
 * Link- https://leetcode.com/problems/next-permutation/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * T- O(N)
 * S- O(1)
 */

var nextPermutation = function(nums) {
    let i=nums.length-1;
    while(i>=0){
        if(nums[i-1] < nums[i]){
            // find next greater of i-1
            let nextGInd = nums.length-1;
            while(nums[nextGInd]<=nums[i-1]){ 
                nextGInd--;
            }
            swap(i-1, nextGInd);
            reverse(i, nums.length-1); 
            return nums;
        }
        i--;
    }
    
    return reverse(0, nums.length-1);

    
    function reverse(m, n){
         while(m<n){
            let temp = nums[m];
            nums[m]= nums[n];
            nums[n]=temp;
            n--;
            m++;
        }
        return nums;
    }
    
    function swap(m, n){
        let temp = nums[m]
        nums[m]= nums[n];
        nums[n]=temp;
    }
};