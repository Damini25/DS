/**
 * @param {number[]} nums
 * @return {number[]}
 * T-O(n),S-O(1)
 */
var sortedSquares = function(nums) {
    
    let mid =0;
    let start=0,end=nums.length-1;
     
    while(start<=end){ //O(log n)
        mid= Math.floor(start+(end-start)/2);
        
        if(mid > 0 && nums[mid-1]<0 && nums[mid]>=0) break;
        if(nums[mid] < 0){
            start=mid+1;
        }else{
            end=mid-1;
        }
    }

   let i=mid-1, j=mid;
   let res=[];
    
   while(i>=0 && j<nums.length){ //O(n)
        if(Math.abs(nums[i])< Math.abs(nums[j])){
            res.push(nums[i]*nums[i]);
            i--;
        }else{
            res.push(nums[j]*nums[j]);
            j++;
        }
    }
    
    if(i>=0){
        while(i>=0){
            res.push(nums[i]*nums[i]);
             i--;
        }
    }
    
    if(j<=nums.length-1){
        while(j<=nums.length-1){
           res.push(nums[j]*nums[j]);
            j++;
        }
    }

    return res;
};