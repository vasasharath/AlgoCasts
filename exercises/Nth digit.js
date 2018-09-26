/*
Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3

Output:
3
Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
*/
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var length = 1;
    var count = 9;
    var digits = 9;

    while (n > digits) {
        length++;
        count *= 10;
        digits += length * count;
    }
    n = n - (digits - length * count);

    var position = Math.ceil(n / length);
    var number = Math.pow(10, (length - 1)) + position - 1;

    if (n % length === 0) {
        return number % 10;
    } else {
        return parseInt(String(number)[n % length - 1]);
    }
};