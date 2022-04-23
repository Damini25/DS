/**
 * You are given an array colors, in which there are three colors: 1, 2 and 3.

You are also given some queries. Each query consists of two integers i and c, return the shortest distance between the given index i and the target color c. If there is no solution return -1.
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 * Input: colors = [1,1,2,1,3,2,2,3,3], queries = [[1,3],[2,2],[6,1]]
Output: [3,0,3]
 */
var shortestDistanceColor = function(colors, queries) {
    let res = []; let seen ={}
    for(let [ind, color] of queries){
        if(seen[ind+"_"+color]) res.push(seen[ind+"_"+color]);
        else if(colors[ind] ===  color) res.push(0);
        else{
            let i = ind-1,j=ind+1;let cInd = -1
            while(i>=0 || j < colors.length){
                if(colors[i]===color){
                    cInd =ind-i;
                    break;
                }
                 if(colors[j]===color){
                    cInd=j-ind
                    break;
                }
                i--;j++;
            }
            res.push(cInd);
            seen[ind+"_"+color] = cInd;
        }
    }
    return res;
};