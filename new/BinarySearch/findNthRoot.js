//Link-https://www.geeksforgeeks.org/calculating-n-th-real-root-using-binary-search/
// T- O(log n)
function findNthRoot(x, n)
    {
  
        // Initialize boundary values
        let low=1, high=x;
        let epsilon = 0.00000001;
  
      //  let guess = parseInt((low + high) / 2, 10);
      
        let guess = (low + high) / 2;
        while (Math.abs((Math.pow(guess, n)) - x)
                >= epsilon)
        {
            if (Math.pow(guess, n) > x)
            {
                high = guess;
            }
            else
            {
                low = guess;
            }
            guess = (low + high) / 2;
        }
  
        return guess;
    }
     
    let x = 27;
    let n = 3
   console.log( findNthRoot(x, n));