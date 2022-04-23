/**
 * 
 * @param {*} arr 
 * Time - O(n log n)
 * Space - O(n log n)
 */
function MergeSort(arr){

    function mergeSort(start, end, arr){
        if(start===end) return [arr[start]];
        if(start+1 === end) return arr[start]<arr[end] ? [arr[start],arr[end] ]: [arr[end],arr[start]];
        
        let mid = start + Math.floor((end-start)/2);
        let leftArr = mergeSort(start, mid, arr);
        let rightArr = mergeSort(mid+1, end, arr);
        return merge(leftArr,rightArr);
    }
    return mergeSort(0,arr.length-1,arr);
}

function merge(leftArr,rightArr){ //Time - O(n), Space- O(n)
    let i=0,j=0;let res=[]
    while (i < leftArr.length && j < rightArr.length) {
        if(leftArr[i]<rightArr[j]){
            res.push(leftArr[i]);
            i++;
        }else{
            res.push(rightArr[j]);
            j++;
        }
    }
    while(i<leftArr.length){
        res.push(leftArr[i]);
        i++;
    }
    while(j<rightArr.length){
        res.push(rightArr[j]);
        j++;
    }
    return res;
}

/**************************************** merge sort in-place *************************************/

function MergeSort(arr){

    function mergeSort(start, end, arr){
        if(start===end) return;
        let mid = start + Math.floor((end-start)/2);
        mergeSort(start, mid, arr);
        mergeSort(mid+1, end, arr);
        merge(start, mid, end, arr);
    }
    mergeSort(0,arr.length-1,arr);
    return arr;
}

function merge(start, mid, end, arr){
    let i=start,j=mid+1;let res=[];let k=0;
    while (i <= mid && j <= end) {
        if(arr[i]<arr[j]){
            res[k]= arr[i];
            i++;
        }else{
            res[k]=(arr[j]);
            j++;
        }
        k++;
    }
    while(i<=mid){
        res.push(arr[i]);
        i++;
    }
    while(j<=end){
        res.push(arr[j]);
        j++;
    }
   
    for(let i=0; i< res.length; i++){
        arr[i+start]= res[i];
    }
}