//Link- https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1/?page=1&company[]=Google&category[]=Backtracking&sortBy=submissions#
//T- O(n!/(n-k)!)
findMaximumNum(str, k)
    {
        let ans = str;
        solve(k, 0, ans);
        return solve(k, 0, ans);
        
        function solve(k, start, ans){
            if(k===0) return ans;
               let max = str[start];
               for(let i=start; i<str.length;i++){
                   if(str[i]>max){
                       max= str[i];
                   }
               }
               if(str[start] !== max) k--;
               for(let i=start; i<str.length;i++){
                   if(str[i] === max){
                       swap(start,i);
                       if(str>ans){
                           ans = str;
                       }
                       const newStr = solve(k, start+1, ans);
                       if(newStr > ans) ans = newStr;
                       swap(start,i);
                   }
               }

               return ans;
        }
        
        function swap(start,i){
            str = str.split('')
            let temp = str[start];
            str[start]= str[i];
            str[i]= temp;
            str = str.join('')
        }
    }