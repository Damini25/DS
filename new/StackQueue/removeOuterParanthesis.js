/**
 * Link- https://leetcode.com/problems/remove-outermost-parentheses/
 * @param {string} s
 * @return {string}
 Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let result = '';
    
    for(let i=1; i<s.length;i++){
        if(s[i]===')'){
            if(!stack.length){
                i++;
            }else{
                result=result+s[i];
                stack.pop();
            }
        }else{
            stack.push(s[i]);
            result=result+s[i]
        }
    }
    return result;
};