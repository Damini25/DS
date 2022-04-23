/**
 * Analyze User Website Visit Pattern
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 * Input: username = ["joe","joe","joe","james","james","james","james","mary","mary","mary"], timestamp = [1,2,3,4,5,6,7,8,9,10], website = ["home","about","career","home","cart","maps","home","home","about","career"]
 * Output: ["home","about","career"]
 * The score of a pattern is the number of users that visited all the websites in the pattern in the same order they appeared in the pattern.
 */
var mostVisitedPattern = function(username, timestamp, website) {
    let tuples = [];
    // create tuples
    for(let i =0 ;i<username.length;i++){
        tuples.push({u:username[i], w:website[i], t: timestamp[i]});
    };
    
    // sort based on timestamp
    tuples.sort((a,b)=>a['t']-b['t']);

    //create user wise website array;
    let userTuples ={};
    for(let i =0 ;i<tuples.length;i++){
        const {u,w} = tuples[i]
        if(!userTuples[u]) userTuples[u] = [w];
        else userTuples[u].push(w);
    };
    
   //create user wise patterns array;
    for(let i in userTuples){
        userTuples[i] = createPatterns(userTuples[i]);
    };
    
   //create pattern dict and occurance;
    let dict ={}; 
     for(let i in userTuples){
       let cUser = userTuples[i];
         for(let j in cUser){
             if(!dict[j]) dict[j] =1;
             else dict[j]= dict[j]+1
             
         };
    };
    
    // sort pattern dict and return max score;
    let keys = Object.keys(dict);
    keys.sort();
    let max=0;let maxVal;
    for(let i=0;i<keys.length;i++){
        if(dict[keys[i]]>max){
                 max = dict[keys[i]];
                 maxVal = keys[i];
        }
    }
     return  maxVal.split('_');
};

const createPatterns = (arr) => {
    let i=0;let res={};
    while(i<arr.length-2){
        let j=i+1;
        while(j<arr.length-1){
            let k=j+1;
            while(k<arr.length){ 
                let c= [arr[i]+'_'+arr[j]+'_'+arr[k]];
                if(!res[c]) res[c] = 0;
                k++;
            }
            j++;
        }
        i++;
    }
    return res;
}