/**
 * And- Number && 1 === Number
 *
 * OR
 *
 * XOR- Number XOR 1 === complement(Number),
 *      Number XOR Number === 0
 *
 * Complement- 1=0, 0=1
 *
 * Base 2 = between(0 to 1)
 *
 * Base 10-Decimal = between (0 to 9)
 *
 * Base 8= between (0 to 7)
 *
 * HexaDecimal = (o to 9,A,B,C,D,E,F)
 *
 *
 * Decimal  to Base 2 --> divide by 2 and store reminders in opposite manner
 *
 * Decimal  to Base 8 --> divide by 8 and store reminders in opposite manner
 *
 * Base 2 to Decimal ->eg-118=>  digit 1 * 2 Pow 2 + digit 1 * 2 Pow 1+ digit 8 * 2 Pow 0
 *
 * Base 8 to Decimal ->eg-118=>  digit 1 * 8 Pow 2 + digit 1 * 8 Pow 1+ digit 8 * 8 Pow 0
 *
 * Left shift--> << Covert to binary first , then left shift (means add 0 to last)
 * eg= 1010 << 1  => 10100 ===> 2(number)
 * left shift of 10  one times become - 20
 *
 * VVIP --- A << B  times ===> A * 2 Pow B
 *
 *
 * Right Shift - >> 0011001 >> 1 ==> 001100 => 1100 (ignore last digit)
 *
 * eg- A >> B times === A / 2 Pow B
 *
 *
 * Always even binary number- if Last number is 0 because before the last number all numbers will be multiplied with pow of 2
 *  number & 1 ===> if last  digit 1 then odd else even
 *
 * Always odd binary number- if Last number is 1
 * 
 * 2's complement gives negative of number
 * 
 * if LSB =0 number positive
 * if LSB =0 number negative
 * 
 *  2's complement = Complement (num)+1
 */
