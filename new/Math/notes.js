/**
 * ax+by= liters - (galoons of water)
 * 
 * eg= a= 2, b=4, litres= 5 =>HCF=2
 * 
 * 2x+4y=5 // can we fill 5 litres of water with bucket of 2 and 4 litres?
 * 
 * 2(x+2y)= 5 =>  x+2y=2.5 // No  because of decimal
 * 
 * eg= a= 3, b=6, litres= 9 => HCF=3
 * 3x+6y=9 ==>x+2y=3 => yes we can
 *
 * eg= a= 3, b=5, litres= 17 ==> HCF=1
 * 3x+5y=17 ==>1(3x+5y)=17 => yes we can
 * 
 * Euclid'e aLgo  to find GCD and HCF-
 * GCD(a,b)= GCD(reminder(b,a), a);
 * 
 * IMP=> LCM * HCF = a*b
 * 
 * IMP- n-- => pass the value of n first and then subtract
 *  --n => subtract first than pass
 * 
 * so f(n--) can give stack overflow in recursion
 * 
 * IMP- to calculate number of integers eg- 12345 --> total 5 integers
 * formula is Math.log10(n)+1;
 */

 function findHCF(a,b){
    if(a===0)return b;
    findHCF(b%a,a);
 }

 function findLCM(a,b){
    return (a*b)/findHCF(a,b);
 }