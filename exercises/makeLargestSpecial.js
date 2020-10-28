/*
Special binary strings are binary strings with the following two properties:

The number of 0's is equal to the number of 1's.
Every prefix of the binary string has at least as many 1's as 0's.
Given a special string S, a move consists of choosing two consecutive, non-empty, special substrings of S, and swapping them. (Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.)

At the end of any number of moves, what is the lexicographically largest resulting string possible?

Example 1:
Input: S = "11011000"
Output: "11100100"
Explanation:
The strings "10" [occuring at S[1]] and "1100" [at S[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.
Note:

S has length at most 50.
S is guaranteed to be a special binary string as defined above
*/
var makeLargestSpecial = function(S) {
    const size = S.length;
    
    if(!size) return S;
    
    let anchor = 0, balance = 0;
    let mountain = [];
    
    for(let i = 0; i < size; ++i) {
        balance += (S.charAt(i) === '1' ? 1 : -1);
        if(balance === 0) {
            mountain.push("1" + makeLargestSpecial(S.substring(anchor + 1, i)) + "0");
            anchor = i + 1;
        }
    }
    
    mountain.sort((a, b) => b.localeCompare(a));

    let result = "";    
    for(let i = 0; i < mountain.length; ++i) {
        result += mountain[i];
    }
    
    return result;
};