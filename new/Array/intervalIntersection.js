/**
 * Link- https://leetcode.com/problems/interval-list-intersections/
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 * T-O(M+N)
 * S-O(M+N)
 */
var intervalIntersection = function(firstList, secondList) {
    let i=0,j=0;
    let res=[];
    
    while(i<firstList.length && j<secondList.length){
        let [x1,y1]= firstList[i];
        let[x2,y2] = secondList[j];
        
        if((x2>=x1 && x2<=y1) || (x1>=x2 && x1<=y2)){
            res.push([Math.max(x1,x2), Math.min(y1,y2)]);
        }
        
        if(y2>y1){
            i++;
        }else{
            j++;
        }
    }
    return res;
};