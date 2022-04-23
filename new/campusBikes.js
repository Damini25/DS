
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 * correct solution
 * Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]
Output: [0,2,1]
 */
var assignBikes = function(workers, bikes) {
    let result = new Array(workers.length);
    let map =[];
    
     for(let i=0;i< bikes.length;i++){
        let [x1,y1]= bikes[i]; 
        for(let j=0;j<workers.length;j++){
            let [x2,y2] = workers[j]; 
            let dist = Math.abs(x2-x1) + Math.abs(y2-y1);
            map.push({worker:j,dist,bike:i})
        }
    }
    map.sort((a,b)=>a.dist-b.dist);
    
    let allotedbikes={};let allotedWorkers = {};
    
    for(let i=0;i<map.length;i++){
        const {worker, bike}= map[i];
        if(!allotedbikes.hasOwnProperty(bike) && !allotedWorkers.hasOwnProperty(worker)){
            result[worker]=bike;
            allotedbikes[bike]=1
            allotedWorkers[worker]=1;
        }
    }
    
    return result;
};

// ***** wrong solution
/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number[]}
 */
var assignBikes = function(workers, bikes) {
    
    let map ={};let result =[]; let allotedbikes={};
    
    for(let i=0;i< workers.length;i++){
        let [x1,y1]= workers[i];
        for(let j=0;j<bikes.length;j++){
            let [x2,y2] = bikes[j];
            let dist = Math.abs(x2-x1) + Math.abs(y2-y1);
            if(!map.hasOwnProperty(i)) map[i] = [{bikeInd:j,dist}];
            else map[i].push({bikeInd:j,dist});
        }
        map[i].sort((a,b)=>a.dist-b.dist);
    }
    
    // for(let i=0;i< workers.length;i++){
    //     let [x1,y1]= workers[i]; let min = Infinity;
    //     let minBikeInd = -1;
    //     for(let j=0;j<bikes.length;j++){
    //         if(allotedbikes.hasOwnProperty(j)) continue;
    //         let [x2,y2] = bikes[j];
    //         let dist = Math.abs(x2-x1) + Math.abs(y2-y1);
    //         if(!map.hasOwnProperty(i)) map[i] = [{bikeInd:j,dist}];
    //         else map[i].push({bikeInd:j,dist});
    //         if(min > dist){
    //             min = dist;
    //             minBikeInd = j;
    //         }
    //     }
    //     result[i] = minBikeInd;
    //     allotedbikes[minBikeInd]=i;
    //     //console.log(minBikeInd, allotedbikes, result);
    // }
    console.log(map)
    return result;
};