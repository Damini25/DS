/* 
Link - https://practice.geeksforgeeks.org/problems/geek-onacci-number/0/
eek created a random series and given a name geek-onacci series. Given four integers A, B, C, N. A, B, C represents the first three numbers of geek-onacci series. Find the Nth number of the series. The nth number of geek-onacci series is a sum of the last three numbers (summation of N-1th, N-2th, and N-3th geek-onacci numbers)
*/

function geekOnacciNthNumber(arr, n) {
    return getSeries(arr, n-3, 0);

    function getSeries(arr, n, sum){
        if(n===0) return sum;
        let i=arr.length-1;let count=0;
        let s = 0;
        while(count<3){
            s+=arr[i];
            count++;i--;
        }
        arr.push(s);
        return getSeries(arr, n-1, s);
    }
}
console.log(geekOnacciNthNumber([1,3,2],6)) // 19

// series: 1,3,2,6,11,19
