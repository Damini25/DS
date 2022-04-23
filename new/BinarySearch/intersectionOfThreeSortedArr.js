/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 * Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let i = 0; let j=0; let k=0;
    let res=[];
    while(arr1[i] && arr2[j] && arr3[k]){
        
        if(arr2[j] < arr1[i]){
             while(arr2[j] < arr1[i]){
                    j++;
            }
        }else if(arr2[j] > arr1[i]){
             while(arr2[j] > arr1[i]){
                    i++;
             }
        }else{
            if(arr3[k] < arr1[i]){
                 while(arr3[k] < arr1[i]){
                    k++;
                }
              }else if(arr3[k] > arr1[i]){
                  i++;j++;
              }else{
                  res.push(arr1[i])
                  j++; k++;i++;
              }
        }
         //console.log(i,j,k)
    }
    return res;
};