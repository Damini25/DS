// Link- https://leetcode.com/problems/longest-happy-string/
// T- O(a+b+c)
var longestDiverseString = function(a, b, c) {
    let str = "";
    let countA =0, countB=0 , countC=0;

    while(a > 0 || b > 0 || c > 0){
        if(a>0 && ((a>=b && a>=c && countA<2) || (countC===2 && countA === 0) || (countB===2 && countA=== 0 ))){
            str+='a'; 
            a--;
            countA++;
            countB=0; countC=0;
        }else if(b>0 && ((b>=a && b>=c && countB<2) || (countC===2 && countB ===0) || (countA===2 && countB=== 0 ))){
            str+='b'; 
            b--;
            countB++;
            countA=0; countC=0
        }else if(c>0 && ((c>=a && c>=b && countC<2) || (countB===2 && countC=== 0) || (countA===2 && countC=== 0))){
            str+='c'; 
            c--; 
            countC++;
            countB=0; countA=0;
        }else{
            break;
        }
    }
    
    return str;
};