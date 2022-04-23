/**
 * @param {number[][]} intervals
 * @return {number}
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
 * intervals = [[0,30],[5,10],[15,20]]
 */

var minMeetingRooms = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let map = [intervals[0]]
    for(let i=1; i<intervals.length; i++){
        let isOverLap = true;
        for(let j =0;j<map.length;j++){
            if(!isOverLappingIntervals(map[j],intervals[i])){
                map[j] = [map[j][0], Math.max(map[j][1], intervals[i][1])]
                isOverLap = false;
                break;
            }
        }
        if(isOverLap) map.push(intervals[i]);
    }
    return map.length;
};

const isOverLappingIntervals = (int1,int2)=>{
    const [l1,r1] = int1[0] < int2[0] ? int1 : int2;
    const [l2,r2] = int1[0] < int2[0] ? int2 : int1;
    if((l2>=l1 && r2<r1) || (l2>=l1 && l2<r1) || (r2>l1 && r2<r1) || (l1==l2 && r1==r2)) return true;
}