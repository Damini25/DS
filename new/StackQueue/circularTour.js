/**
 * Link- https://practice.geeksforgeeks.org/problems/circular-tour/1#
Input:
N = 4
Petrol = 4 6 7 4
Distance = 6 5 3 5
Output: 1
Explanation: There are 4 petrol pumps with
amount of petrol and distance to next
petrol pump value pairs as {4, 6}, {6, 5},
{7, 3} and {4, 5}. The first point from
where truck can make a circular tour is
2nd petrol pump. Output in this case is 1
(index of 2nd petrol pump).
 */
tour(p, n)
    {
        let cp = 0;
        let sI = 0;
        let def = 0;
       
        for(let i=0; i<n; i++){
            const petrol = p[i].petrol
            const dist = p[i].distance
             cp+=petrol;
             
             if(cp >= dist){
                 cp = cp-dist;
             }else{
                  sI = i+1;
                  def = def+(dist-cp);
                  cp = 0 ;
             }
        }
        
        if(def <= cp) return sI;
        else {
            return -1;
        }
    }