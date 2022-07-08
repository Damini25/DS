// Link- https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1#
// T- O(nlogn), Aux S- O(1)
function maxMeetings(start, end, n)
    {
        let meetings = [];
       for(let i=0;i<end.length;i++){
           meetings.push([start[i], end[i]])
       }
       
       meetings.sort((a,b)=>{
           if(a[1]===b[1]) return a[0]-b[0]
           else  return a[1]-b[1];
       });
       
        // code here
        let count = 1; let curr = meetings[0][1];
        for(let i=0;i<meetings.length;i++){
            if(meetings[i][0]>curr){
                count++;
                curr = meetings[i][1]
            }
        }
        return count;
}