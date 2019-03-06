/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Note:

S.length <= 100
33 <= S[i].ASCIIcode <= 122 
S doesn't contain \ or "
*/
var reverseOnlyLetters = function(S) {
    const isLetter = (c) => /[a-zA-Z]/.test(c);
    const chars = [...S].filter(c => isLetter(c));
	
    let ret = '', index = chars.length - 1;
	
    for (let c of S) 
        ret += isLetter(c) ? chars[index--]: c

    return ret;
};