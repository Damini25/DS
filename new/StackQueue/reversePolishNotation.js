/**
 * Link- https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * T- O(n), S-O(n)
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let op = {
        '+':1, '-':1, '*':1, '/':1
    };
    let res = 0;
    let stack = [];
    let i=0;
    while(i<tokens.length){
        if(op.hasOwnProperty(tokens[i])){
            const y = Number(stack.pop());
            const x = Number(stack.pop());
            res = evaluate(x,y, tokens[i]);
            stack.push(res);
        }else{
            stack.push(tokens[i]);
        }
        i++;
    }
    
    return stack[0] || 0;
    
    function evaluate(n1, n2, operator){
        switch (operator) {
            case '+':{
                return n1+n2;
            }
            case '-':{
                return n1-n2;
            }
            case '/':{
                return Math.trunc(n1/n2)
            }
            case '*':{
                return n1*n2;
            }
        }
    }
};