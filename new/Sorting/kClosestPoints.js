/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let map=[];
    
    for(let i=0;i<points.length;i++){
        const dist = findDistanceFromOrigin(points[i]);
        map.push({dist:dist, point: points[i]});
    }
    
    const sortedArray = mergeSort(0,map.length-1, map)
    
    let result=[];
    for(let i=0;i<k;i++){
        result.push(sortedArray[i].point)
    }
    return result;
    function mergeSort(start, end , arr){
        if(start === end) return [arr[start]];
        
        let mid = Math.floor(start+(end-start)/2);
        
        const arr1 = mergeSort(start, mid, arr);
        const arr2 = mergeSort(mid+1, end, arr);
        
        return merge(arr1, arr2);
    }
    
    function merge(arr1, arr2){
        let arr3 =[];
        let i=0, j=0;
        
        while(i<arr1.length && j<arr2.length){
            if(arr1[i].dist<arr2[j].dist){
                arr3.push(arr1[i]);
                i++;
            }else{
                arr3.push(arr2[j]);
                j++;
            }
        }
        
        if(i<arr1.length){
             while(i<arr1.length){
                arr3.push(arr1[i]);
                i++;
            }
        }else{
            while(j<arr2.length){
                arr3.push(arr2[j])
                j++;
            }
        }
        return arr3;
    }
    
    function findDistanceFromOrigin(p1){
        let [x1,y1]=p1;
        let [x2,y2]=[0,0]
        return fix2Decimal(Math.sqrt(((x1-x2)*(x1-x2)) +((y1-y2)*(y1-y2))));
    }
    
    function fix2Decimal(num){
        if(num>0){
            return Math.floor(num * 10000)/10000;
        }else {
            return Math.ceil(num * 10000)/10000;
        }
    }
};