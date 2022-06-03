/**
 * Link- https://practice.geeksforgeeks.org/problems/stock-span-problem-1587115621/1/#
 * 
https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignmentsInput: 
N = 7, price[] = [100 80 60 70 60 75 85]
Output:
1 1 1 2 1 4 6
Explanation:
Traversing the given input span for 100 
will be 1, 80 is smaller than 100 so the 
span is 1, 60 is smaller than 80 so the 
span is 1, 70 is greater than 60 so the 
span is 2 and so on. Hence the output will 
be 1 1 1 2 1 4 6.

 */
function calculateSpan(price, n)
    {
        let s1 = [];
        let s2 = [];
        for(let i=0;i<price.length;i++){
            
            if(!s1.length || ( price[i] < price[s1[s1.length-1]] ) ){
                s1.push(i);
                s2.push(1);
            }else{
                while(price[i] >= price[s1[s1.length-1]]){
                    s1.pop();
                }
                if(s1.length) s2.push(i-s1[s1.length-1]);
                else s2.push(i+1);
                s1.push(i);
            }
        }
        return s2;
}
// *********************** time limit exceeded ********************
function calculateSpan(price, n)
    {
        // code here
        let s1 = [];
        let s2 = [];
        for(let i=0;i<price.length;i++){
            
            if(!s1.length || ( price[i] < s1[s1.length-1] ) ){
                s1.push(price[i]);
                s2.push(1);
            }else{
                let c = 1; let j = s1.length-1;
                while(price[i] >= s1[j]){
                    c++;
                    j--;
                }
                s1.push(price[i]);
                s2.push(c);
            }
        }
        return s2;
}