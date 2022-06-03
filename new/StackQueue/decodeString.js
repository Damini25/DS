/**
 * Link- https://leetcode.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 * Input: s = "3[a2[c]]"
Output: "accaccacc"
 */
var decodeString = function(s) {
    let stack = [];
    
    for(let i =0;i<s.length;i++){
        if(s[i]!==']'){
            stack.push(s[i]);
        }else if(s[i]===']'){
            let s = "";
            
            while(stack[stack.length-1] !== '['){
                if(stack[stack.length-1] === '[') break;
                s = stack[stack.length-1] + s;
                stack.pop();
            }
            stack.pop(); // remove '['
            
            let d = "";
            while(stack[stack.length-1] >='0' && stack[stack.length-1]<='9'){
                d=stack[stack.length-1]+d;
                stack.pop();
            }
            d= Number(d);
            for(let i=1;i<=d ;i++){
                stack.push(s);
            }
        }
    }
    return stack.join('');
};