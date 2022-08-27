// Link- https://practice.geeksforgeeks.org/problems/nuts-and-bolts-problem0431/1

function matchPairs(nuts, bolts ,n){
    //code here
    let map = {};
    let order = ['!', '#', '$', '%', '&', '*', '@', '^', '~'];
    
    for(let i=0;i<bolts.length;i++){
        if(!map.hasOwnProperty(bolts[i])){
            map[bolts[i]] = 1;
        }else {
            map[bolts[i]]++;
        }
    }
    
    let i=0, j=0;
    
    while(i<nuts.length){
        if(map.hasOwnProperty(order[j])){
            bolts[i] = order[j];
            
            if(map[order[j]] === 1) delete map[order[j]];
            else map[order[j]]--;
            
            nuts[i] = order[j];
            i++;
        }
        j++;
    }
    
    return bolts;
}