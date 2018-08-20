/*
Reverse bits of a given 32 bits unsigned integer.

Example:

Input: 43261596
Output: 964176192
Explanation: 43261596 represented in binary as 00000010100101000001111010011100, 
             return 964176192 represented in binary as 00111001011110000010100101000000.
Follow up:
If this function is called many times, how would you optimize it?

*/
var reverseBits = function (n) {
	var s = '';
	var count = 0;
	var index = 31;
	while (n > 0) {
		if (n % 2 !== 0)
			count += Math.pow(2, index);
		index--;
		n = Math.floor(n / 2);
	}
	return count;
};