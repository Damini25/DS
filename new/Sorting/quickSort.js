//10,80,30,90,40,50,70
10, 70, 30, 90, 40, 50, 80;
10, 50, 30, 90, 40, 70, 80;

40, 30, 20, 10;
10, 30, 20, 40;

/*
* Time- Worst case - O(n*n);
Best case- O(n log(n));
Quick sort is not stable
*/

function quickSort(arr) {
    let start = 0,
        end = arr.length - 1;
    let pivot = end;

    function sort(start, end, arr) {
        let pivot = calculate(start, end, arr); // O(n)
        if (start < pivot - 1) sort(start, pivot - 1, arr); // T(to sort till pivot-1)
        if (pivot + 1 < end) sort(pivot + 1, end, arr); // T(to sort from pivot+1 till end)
        //console.log(arr);
    }

    function calculate(start, end, arr) {
        let pivot = end;
        while (start < pivot || end > pivot) {
            while (start < pivot) {
                if (!(arr[start] < arr[pivot])) {
                    let temp = arr[start];
                    arr[start] = arr[pivot];
                    arr[pivot] = temp;
                    pivot = start;
                }
                start++;
                console.log("pass1", arr, pivot);
            }

            while (end > pivot) {
                if (!(arr[pivot] < arr[end])) {
                    let temp = arr[end];
                    arr[end] = arr[pivot];
                    arr[pivot] = temp;
                    pivot = end;
                }
                end--;
                console.log("pass2", arr, pivot);
            }
        }
        console.log("pass3", arr, pivot, start, end);
        return pivot;
    }

    sort(0, arr.length - 1, arr);
    return arr;
}
