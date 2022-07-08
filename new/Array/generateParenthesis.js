/**
 * Link- https://leetcode.com/problems/generate-parentheses/
 * - T- O(2^2n * n)
 * - S - O(2^2n * n)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=[];
    
    generateAll([], 0, n*2);
    return res;
    
    function generateAll( curr, pos, max){  // O(2^2n)
       // console.log(curr)
        if(pos === max){
            if(isValid(curr)){
                res.push(curr.join(''));
            }
        }else{
            curr[pos]="(";
            generateAll(curr, pos+1, max);

            curr[pos]=")";
            generateAll(curr, pos+1, max);
        }
    }
};

function isValid(p){ //O(n)
        let s = [];
        for(let i =0;i<p.length;i++){
            if(p[i]==='(') s.push('(');
            else{
                if(s[s.length-1]!=='('){
                    return false;
                }else{
                    s.pop();
                }
            }
        }
        return s.length===0;
}
// ********simple solution ****

/**
 * - T- O(2^2n * n)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n===1) return ['()'];
    let set= {};
    let last = generateParenthesis(n-1);
    
    for(let i=0;i<last.length;i++){ //O(n)
        let s =last[i]
        for(let j=0;j<s.length;j++){ //(n*2)
            let key = s.substring(0,j+1)+ "()"+s.substring(j+1);
            set[key]=1;
        }
    }
    return Object.keys(set)
};

// ************* optimised
/**
 * - T- O(2^2n * n)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=[];
    
    generateAll([], 0, 0, n);
    return res;
    
    function generateAll( curr, open, close, max){  
        if(curr.length === n*2){
            res.push(curr.join(''));
        }else{
            if(open<max){
                curr.push('(');
                generateAll(curr, open+1, close, max);
                curr.pop();
            }
           if(close<open){
               curr.push(')');
               generateAll(curr, open, close+1, max);
                curr.pop();
             }
        }
    }
    return res;
};