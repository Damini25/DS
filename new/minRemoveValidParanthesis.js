/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
   
   s = s.split('');
   for(let i=0;i<s.length;i++){
       if(s[i]==='(' || s[i]===')'){
           if(s[i]===')'){
               if(stack[stack.length-1] && stack[stack.length-1]['name']==='('){
                   stack.pop();
               }else{
                   //remove
                   s[i]='';
               }
           }else stack.push({'name':'(', 'ind':i});
       }
   }
   
   if(stack.length){
       for(let i=0;i<stack.length;i++){
           s[stack[i].ind] = '';
       }
   }
  // console.log(s, s.join(''))
   return s.join('')
};