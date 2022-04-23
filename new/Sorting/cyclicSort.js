/**
 * blindly use when you are given with range 1 to n numbers
 * T-O(n)
 * 5,2,3,1,4
 */

function cyclicSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            while (arr[i] !== i + 1) {
                let temp = arr[arr[i] - 1];
                arr[arr[i] - 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
// Solution-2
function cyclicSort(arr) {
    let i =0;
    while (i<arr.length) {
        if (arr[i] !== i + 1) {
            let temp = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = temp;
        }else i++;
    }
    return arr;
}