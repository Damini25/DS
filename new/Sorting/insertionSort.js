/**
 * Insertion sort
 * Time- Best-O(n), worst-O(n*n)
 * Space- O(1)
 * eg- arr = [5,4,1,3,2]
 */
function insertionSort(arr){
    for(let i=0; i<arr.length-1; i++){  // O(n-1)
        for(let j=i+1; j>0; j-- ){   // O(n-1)
            if(arr[j-1] > arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }else break;
        }
    }
    return arr;
}