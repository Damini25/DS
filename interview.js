/**
 * 1
 *  Find smallest positive integer missing from an array
 *  eg- [2, 3, 7, 6, 8, -1, -10, 15] //1
 *  [2, 3, -7, 6, 8, 1, -10, 15] //4
 */

//------------------------------------------

/**
 * 2
 * Polyfill for map
 *
 *
//------------------------------------------
/**
 * 3
 * basic JS snippet
 * 
setTimeout(()=>{
    for(let i=0;i<5;i++){
        console.log(i)
      }
},1000)

 */
// after 1 sec 0,1,2,3,4

//--------------------------------------------//

/**
 * 4
 * closure-
 * /

(function immediateA(a) {
            return (function immediateB(b) {
           console.log(a); // What is logged?
        })(1);
 })(0);

out- 0

//---------------------------------------------//
/**
 * 5
 * snippet-
 * /
 * 
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count);
})();

// 1, 0
//-----------------------------------------
/**
 * 6
 * closure
 * o/p- 3,3,3

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); 
  }, 1000);
}
 */
 //-------------------------------

/**
 * 7
 * hoisting
 * 
         var a = 4;

        function greet() {
            b = 'hello';
            console.log(b); 
            var b;
        }

        greet();
        console.log(b); 

    o/p=
        hello
        Uncaught ReferenceError: b is not defined
 *------------------------------------------------/

/**
 * 
    a = 5;
    console.log(a);
    let a; 
    output--
    
    // Cannot access 'a' before initialization
 */
//------------------------------------------------------------

/**
 * 8. Explain event loop
 * 9. Design patterns Constructor/Prototype/Module/singleton/observer
 * 10. Asynch/Await -- error handling try catch
 * 11. shallow comparison vs deep comparison 
 */
//--------------------------------------//
/**
 * 12. currying basic
 * 
 * add(10)(20)(30);
 * 
 * 
 * function add(a){
    return function(b){
            return function(c){
                return a + b + c;
            }
        }
    }
 */
//--------------------------------------------
// 13 . Local storage vs session storage vs cookies? When to use these?
/**
 * 14. How do you share the sensitive information to server
 * 15. Promise vs callBack. How to handle multiple calls? promise.all() 
 * 16. interceptors
 * 17. How to stop modifying objects without freeze.
 */
//------------------------------------------
/**
 * React JS
 * 
 * 33. How do you rate yourself in React? 
 * 
34. Virtual DOM , Reconciliation , Did you use hooks ? Can you list down the hooks and its usage? Advantage 
35. What is lazy loading? Why do we use it? — wrong 
36. How to avoid multiple rendering ? memo vs callBack 
37. What is redux and why do we use it? How to create reducers? 
38. Do you know redux-persist ? 
39. What is react context ? Can we use context instead of redux?  
40. How will you ensure performance optimisation? 
41. What are the measures how will you improve performance? 
42.  What is code-splitting? 
43. Progressive web application— 
44. Difference between visibility hidden and display none
 */