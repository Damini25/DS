//Link- https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/
class Solution
{
    //Function to find the length of longest common subsequence in two strings.
    lcs(x, y, s1, s2)
    {
        let dp = new Array(s1.length);
        
        for(let i=0;i<s1.length;i++){
            dp[i] = new Array(s2.length).fill(-1);
        }
        
       return recur(s1, s2, s1.length-1, s2.length-1)
        
       function recur(str1, str2, ind1, ind2){
           if(ind1 === -1 || ind2 === -1) return 0;
           
           if(dp[ind1][ind2] !== -1 ) return dp[ind1][ind2];
           
           if(str1[ind1] === str2[ind2]){
               return dp[ind1][ind2] = 1 + recur(str1, str2, ind1-1, ind2-1)
           }else{
               return dp[ind1][ind2] = Math.max( recur(str1, str2, ind1-1, ind2),  recur(str1, str2, ind1, ind2-1))
           }
       }
       
    }
}
