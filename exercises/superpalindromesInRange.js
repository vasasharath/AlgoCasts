/*
Let's say a positive integer is a super-palindrome if it is a palindrome, and it is also the square of a palindrome.

Given two positive integers left and right represented as strings, return the number of super-palindromes integers in the inclusive range [left, right].

 

Example 1:

Input: left = "4", right = "1000"
Output: 4
Explanation: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.
Example 2:

Input: left = "1", right = "2"
Output: 1
 

Constraints:

1 <= left.length, right.length <= 18
left and right consist of only digits.
left and right cannot have leading zeros.
left and right represent integers in the range [1, 1018].
left is less than or equal to right.
*/
var superpalindromesInRange = function(L, R) {
    
	// My idea was to take the root of L and R and then generate all palindromes between those numbers,
	// and then put those palindromes to power 2 and check if those are palindrome as well.
	
	// The generation of palindromes is done like this:
	// Lets say i want all palindromes of length 4, then i take all numbers of length 2.
	// I reverse the length 2 numbers and concatenate them with themselves. 
	// So "19" becomes "19" + "91". For odd length I do the same,
	//	but put a for loop around them that puts nrs 0 - 9 inside them. 
	// So "19" + "0" + "91", then "19" + "1" + "91", etc.
	
	// Next I loop through the generated palindromes and just check whether they are
	// inside sqrt(L) and sqrt(R). (sqrt(L) < palin < sqrt(R))
		// For every palin within sqrt(L) and sqrt(R), i put the palin to power 2
		// (with BigInt!) and then check if that is a palindrome. If so, then count++;
	
	var sqL = Math.sqrt(L);
	var sqR = Math.sqrt(R);
	var sqR_Length = parseInt(sqR).toString(10).length;
	var palins = 0; // counting the valid super-palindromes
	if (isPalindrome(L) && sqL == parseInt(sqL) && isPalindrome(sqL.toString(10))) palins++; // L is a superpalindrome
	if (isPalindrome(R) && sqR == parseInt(sqR) && isPalindrome(sqR.toString(10))) palins++; // R is a superpalindrome
	
	if (sqR == parseInt(sqR)) {
		var end = parseInt(sqR)-1; // or else the loop will possibly add R as well
	} else {
		var end = parseInt(Math.floor(sqR));
	}
	
	if (sqL == parseInt(sqL)) {
		var begin = parseInt(sqL)+1; // or else the loop will possibly add R as well
	} else {
		var begin = parseInt(Math.ceil(sqL));
	}
	
	// account for superpalins with for single digit 'sub-palins'
	if (begin <= 1 && end >= 1) palins++; // 1
	if (begin <= 2 && end >= 2) palins++; // 4
	if (begin <= 3 && end >= 3) palins++; // 9
	var length = sqR_Length;
	var even = (length % 2 === 0);
	var half = Math.floor(length/2);
	var pow10Half = Math.pow(10, half); // 10 or 100 or 1000, etc
	var pow10HalfMinOne = Math.pow(10, half-1);
	var pal = ''; // init
	var palinStr = ''; // init
	var palin = -1; // init
	for (var i=1, leni=pow10Half; i < leni; i++) {
		pal = i.toString(10);
		pal.padStart(half-pal.length, '0');
		palReverse = reverseStr(pal);
		// palinsArr.push(pal + palReverse);
		palinStr = pal + palReverse; // generate even length palindrome
		palin = parseInt(palinStr);
		if (palin >= begin && palin <= end) {
			if (isPalindromeInt(BigInt(palin)*BigInt(palin))) {
				palins++;
			}
		}
		
		if (even && i >= pow10HalfMinOne) { // If I generate all palindromes up until some even length, lets say 4, then last step is to do length 2 + length 2 (19 + 91), and not the 19 + 0 + 91 step that generates odd length palindromes.
			continue;
		}
		for (var j=0, lenj=10; j < lenj; j++) {
			// palinsArr.push(pal + j + palReverse);
			palinStr = pal + j + palReverse; // generate odd length palindrome
			palin = parseInt(palinStr);
			if (palin >= begin && palin <= end) {
				if (isPalindromeInt(BigInt(palin)*BigInt(palin))) {
					palins++;
				}
			}
		}
	}
	
	return palins;
	
	
	
	
	
};

var reverseStr = function (str) {
	// nr = nr.toString(10);
	return str.split('').reverse().join('');
}

var isPalindromeInt = function (nr) {
	nr = nr.toString(10);
	return nr === nr.split('').reverse().join('');
}
var isPalindrome = function (nr) {
	return nr === nr.split('').reverse().join('');
}