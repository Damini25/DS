/**
 * Link- https://leetcode.com/problems/132-pattern/
 * @param {number[]} nums
 * @return {boolean}
 */
// *** Time Limit Exceeded Errror ********** - O(n*n)
var find132pattern = function(nums) {
    if(nums.length <= 2) return false;
    
    let min = Infinity;
    
    let s = [];
     
    let j=0;
    
while(j<nums.length){
    if(nums[j] < min){
        let i = j;
        min = nums[j];
        s=[];
        while(i<nums.length){
            if(s.length <=1 ){
                if(s.length && nums[i] < s[s.length-1]){
                    s.pop();
                    s.push(nums[i]);
                }else if(!s.length || nums[i] > s[s.length-1]){
                    s.push(nums[i]);
                }
            }else{
                if(nums[i] < s[s.length-1] && nums[i]>s[s.length-2]){
                    return true;
                }else if(nums[i] > s[s.length-1]){
                      s.pop();
                      s.push(nums[i]);   
                }
            }
            i++;
        }
      }
    j++;
}
    return false;
};

// ****** optimized solution ******
var find132pattern = function(nums) {
    let min = new Array(nums.length);
    min[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        min[i]= Math.min(min[i-1], nums[i]);
    }
    
    let s = [];
    let i = nums.length-1;
    
    while(i>=0){
        // if nums[i]<=min[i] do nothing means continue
        // else
        if(nums[i] > min[i]){
            //top item of stcak should be greater than min
            while(s.length && s[s.length-1] <= min[i]){
                s.pop();
            }
            if(nums[i] > s[s.length-1]) return true;
            s.push(nums[i]);
        }
        i--;
    }
    return false;
};