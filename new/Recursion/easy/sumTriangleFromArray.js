/**
 * 
 * Link - https://www.geeksforgeeks.org/sum-triangle-from-array/
 * Given an array of integers, print a sum triangle from it such that the first level has all array elements. From then, at each level number of elements is one less than the previous level and elements at the level is be the Sum of consecutive two elements in the previous level. 
Input : A = [1, 2, 3, 4, 5]
Output : [48]
         [20, 28] 
         [8, 12, 16] 
         [3, 5, 7, 9] 
         [1, 2, 3, 4, 5]

         T- O(n*n)
         S- O(n)
*/
function sumTriangle(arr){
    recur(arr);
    console.log(arr);

    function recur(arr){
        if(arr.length===1) return;
        let res = [];
        for (let i = 0; i < arr.length - 1; i++) { //O(n)
            res.push(arr[i]+arr[i+1])
        }
        recur(res);
        console.log(res);
        return;
    }
}
sumTriangle([1,2,3,4,5])
