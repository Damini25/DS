/**
 * Sinking sort and Exchange sort
 * Space- O(1)
 * Time- Best -O(n) // array sorted
 * Worst-O(n*n) // array is in descending order
 */

function BubbleSort(arr) {
    let swapOccurred = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                swapOccurred = true;
            }
        }
        if (!swapOccurred) break;
    }
    return arr;
}

//**** recursive version */

function BubbleSort(arr) {
    function recur(arr, i, j) {
        if (i === arr.length - 1) return;
        if (j <= arr.length - i) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            recur(arr, i, j + 1);
        } else {
            recur(arr, i + 1, 0);
        }
    }
    recur(arr, 0, 0);
    return arr;
}

