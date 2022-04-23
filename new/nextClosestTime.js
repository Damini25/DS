/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    let min=Infinity,max=-Infinity;
    let limit = [2,time[0] === '2' ? 3 : 9 ,null,5,9];
    time=time.split('');
    for(let i=0; i<time.length; i++){
        if(time[i]!==':'){
            min = Math.min(min,time[i]);
            max = Math.max(max,time[i]);
        }
    };
    
    let i=time.length-1;
    while(i>=0){
        if(time[i]!==max){
            let j=0; let closestMax = Infinity;
            while(j< time.length){
                if(time[j] !== ':' && time[j]>time[i]){
                    closestMax= Math.min(closestMax, time[j]);
                } 
                j++;
            } // inner while closed
            if(closestMax!==Infinity && closestMax <= limit[i]) {
                time[i]=closestMax;
                break;
            }
        }
        i--;
    }
    i++; // to start replacing min vales
    while(i< time.length){
        if(time[i] !== ':') time[i]=min;
        i++;
    }
    return time.join('');
};