// **** findSubset Array ****
// eg= [1] => [[],[1]]
// [1,2] => [[],[1],[2],[1,2]]
//Time= O(n * Math.pow(2,n))
//Space = O(n * Math.pow(2,n))

function findSubset(a) {

    function recur(arr, subsetList, i) {

        if (i === arr.length) {
            return subsetList;
        };
        
       let size = subsetList.length;
       
       for(let j=0;j<size;j++){
         let _arr = [...subsetList[j]];
         _arr.push(arr[i]);
         subsetList.push(_arr);
       }
       
       return recur(arr,subsetList, i+1);

    }

    return recur(a, [[]], 0);
};

console.log(findSubset([1,2,3]))

/*****  findSubsetDuplicates */
function findSubsetDuplicates(a) {

    function recur(arr, subsetList, i, start, end) {
        arr.sort();

        if (i === arr.length) {
            return subsetList;
        };
        
        if(i>0 && arr[i]===arr[i-1]){
          start = end + 1;
        }
        
       end = subsetList.length-1;
       let size = subsetList.length;
       
       for(let j=start;j<size;j++){
         let _arr = [...subsetList[j]];
         _arr.push(arr[i]);
         subsetList.push(_arr);
       }
       
       return recur(arr,subsetList, i+1, start, end);

    }

    return recur(a, [[]], 0, 0, 0);
};

console.log(findSubsetDuplicates([1,2,2]))