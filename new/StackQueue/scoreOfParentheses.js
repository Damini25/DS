/**
 * @param {string} s
 * @return {number}
 */

 // un-optimised
 //T-O(n*n), S-O(n)
var scoreOfParentheses = function(s) {
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            stack.push(s[i]);
        }else{
            if(stack[stack.length-1]!=='('){
               let last = 0;
               while(stack[stack.length-1]!=='('){
                 last+=stack.pop();
              }
             stack.pop();
             stack.push(last*2);
            }else{
                stack.pop();
                stack.push(1);
            }
        }
    }
    return stack.reduce((a,b)=>a+b,0); 
};

// optimised - T-O(n), S-O(n)
var scoreOfParentheses = function(s) {
    let stack=[0];
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            stack.push(0);
        }else{
            let popped = stack.pop()
            if(popped === 0){
                stack[stack.length-1]+=1;
            }else{
                stack[stack.length-1]+=2*popped;
            }
        }
        console.log(stack)
    }
    return stack[stack.length-1];
};