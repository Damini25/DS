/**
 * Selection sort
 * used in case of small lists.
 * Time - O(n*n) both best and worst
 * Algo- Pick Largest or smallest element and put it at valid index.
 * Uses- Works good when array is parially sorted
 * Used for smaller values of an array
 * stable sort
 * 
 */

 function SelectionSort(arr){
    for(let i = 0 ;i<arr.length;i++){
        let max = -Infinity; let maxInd = -1;
        for(let j = 0 ;j<arr.length-i;j++){
            if(arr[j]>max){
                maxInd = j;
                max= arr[j];
            }
        }
        if(arr[arr.length-i-1] !== max){
            let temp = arr[maxInd];
            arr[maxInd]= arr[arr.length-i-1];
            arr[arr.length-i-1] = temp;
        }
    }
    return arr;
 }

 // **** recursive solution ****
//54321
function SelectionSort(arr){

    function recur(arr,i,j, max, maxInd){
       if(i===arr.length-1) return;
       if(j<arr.length-i){
          if(arr[j]>max) maxInd= j;
          recur(arr,i,j+1, Math.max(arr[j],max), maxInd);
       }else{
           console.log(i,maxInd)
           let temp = arr[maxInd];
           arr[maxInd]= arr[arr.length-i-1];
           arr[arr.length-i-1] = temp;
           recur(arr, i + 1, 0, -Infinity,0);
       }
    }

    recur(arr,0,0, -Infinity, 0);
    return arr;
}