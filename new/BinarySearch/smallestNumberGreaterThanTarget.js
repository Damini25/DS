/**
 * Link- https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 * Input: letters = ["c","f","j"], target = "a"
Output: "c"

Input: letters = ["c","f","j"], target = "c"
Output: "f"
 */
var nextGreatestLetter = function(letters, target) {
    let start = 0 , end=letters.length-1, mid=0;
    
    while(start <= end){
        mid = start + Math.floor((end-start)/2);
        if(letters[mid] > target){
            end= mid-1;
        }else if(letters[mid] <= target){
            start=  mid+1;
        }
    }
    return start<=letters.length-1 ?  letters[start] : letters[0];
};