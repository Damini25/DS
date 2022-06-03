//Link- https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
var minAddToMakeValid = function(s) {
    let stack = [];
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i]==='('){
            stack.push('(');
        }else{
            if(stack[stack.length-1]==='('){
                stack.pop();
            }else{
                count++;
            }
        }
    }
    return count + stack.length;
};

// ****** optimized solution *********

var minAddToMakeValid = function(s) {
    let count = 0;let closeCount = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i]==='('){
            count++;
        }else{
            if(count){
                count--;
            }else{
                closeCount++;
            }
        }
    }
    return closeCount + count;
};