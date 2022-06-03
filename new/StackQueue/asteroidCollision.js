/**
 * Link- https://leetcode.com/problems/asteroid-collision/
 * @param {number[]} asteroids
 * @return {number[]}
Input: asteroids = [10,2,-5]
Output: [10]
 */
var asteroidCollision = function(asteroids) {
    let s = [];
    for(let i = 0; i<asteroids.length; i++){
        if(!isCollapsible(asteroids[i])){
            s.push(asteroids[i]);
        }else{
            let pushCurr = false;
            while(isCollapsible(asteroids[i]))
                 {
                    if(Math.abs(asteroids[i]) > Math.abs(s[s.length-1])){
                        s.pop();
                        pushCurr = true;
                    }else if(Math.abs(asteroids[i]) === Math.abs(s[s.length-1])){
                        s.pop();
                        pushCurr = false;
                        break;
                    }else{
                        pushCurr = false;
                        break;
                    }
                }
            if(pushCurr) s.push(asteroids[i]);
        }
    }
    function isCollapsible(curr){
       return !!(s[s.length-1] > 0 && curr < 0 );
    }
    
    return s;
};

