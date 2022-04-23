/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.length)return [-1,-1];
    let left = 0 , right= nums.length-1;
    let mid= -1; 
    //[5,7,8,8,8,10]
    let l=-1,r=-1;
    
    while(left<=right){
         mid = Math.floor((left+right)/2);
         if(nums[mid]===target) {
             l=mid; r= mid;
             break;
         }
        
        if(nums[mid]<target){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }

    if(l!==-1){
        l = findElem(left,mid,'left')
        r= findElem(mid,right,'right')
        return [l,r];
    }else return [-1,-1] ;

    function findElem(i, j, type){
          while(i<j){
            let m = Math.floor((i+j)/2);
            if(nums[m] === target){
                if(type ==='left') {
                            if(nums[m-1]!==target) return m;
                            else j = m-1;
                    }else{
                             if(nums[m+1]!==target)return m;
                             else i = m+1;
                        }
            }else if(nums[m]<target){
                i=m+1;
            }else j= m-1;
        }
        return type ==='left' ? j : i;
    }
};