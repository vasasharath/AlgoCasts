/*
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/
var frequencySort = function(s) {
    var hash = {};
    for(let i=0;i<s.length;i++){
        let c = s.charAt(i);
        hash[c] = hash[c] ? hash[c] + 1 : 1;       
    }
	//Sort hash by char repetition, then recreate it.
    return Object.entries(hash).sort((a,b) => b[1]-a[1]).map(x=>x[0].repeat(x[1])).join('');
};