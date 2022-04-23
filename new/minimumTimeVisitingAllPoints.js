/**
 * @param {number[][]} points
 * @return {number}
 * Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds
 */
var minTimeToVisitAllPoints = function(points) {
    let i=0;
    let totalSteps = 0;
    while(i<points.length-1){
        let [x1,y1]=points[i];
        let [x2,y2]=points[i+1];
        
        let diffX = Math.abs(x2-x1);
        let diffY = Math.abs(y2-y1);
        
        totalSteps = totalSteps + Math.max(diffX,diffY);
        i++;
    }
    return totalSteps;
};