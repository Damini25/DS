/**
 * Link- https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} s
 * @return {string}
 * T-O(N), S-O(N)
 */
var removeDuplicates = function(s) {
    let stack =[];
    let i=0;

    while(i<s.length){
        if(stack.length > 0 && s[i]===stack[stack.length-1]){
            while(s[i]===stack[stack.length-1]){
                stack.pop();
            }
        }else{
            stack.push(s[i])
        }
        i++;
    }
    
    return stack.join('');
};