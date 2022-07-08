//Link- https://www.interviewbit.com/problems/repeat-and-missing-number-array/
// T- O(n) , S-O(n)
function repeatedNumber(nums){
    
    const arr = new Array(nums.length).fill(0);
        
    let result =[]
        for(let i=0;i<nums.length;i++){
            if(arr[nums[i]-1] > 0){
              result.push(nums[i]); 
            }else{
              arr[nums[i]-1]=1;
            }
        }
    
        for(let i=0;i<arr.length;i++){
            if(arr[i]===0){
              result.push(i+1);
            }
        }
        return result;
    }

console.log(repeatedNumber([3,1,2,5,3] ))