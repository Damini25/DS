/**
 * Link- https://leetcode.com/problems/exclusive-time-of-functions/
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let res = new Array(n).fill(0);
    let stack = [];
    let lastTime = 0;
    
    for( let i=0; i<logs.length; i++ ){
        let [cId, cEvent, cTime] = logs[i].split(':');
        
        cTime = Number(cTime);
        
        if(stack.length>0){
            if(cEvent === 'start'){
                res[stack[stack.length-1]] += cTime-lastTime;
                lastTime = cTime;
            }else{
                    res[stack[stack.length-1]] += cTime-lastTime + 1;
                    lastTime = cTime+1;
            }
        }
        
        if(cEvent === 'start'){
           stack.push(cId);
        }else{
            stack.pop();
        }
        
    }
    
    return res;
};