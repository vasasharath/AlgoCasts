/*
Given a string and a string dictionary, 
find the longest string in the dictionary that can be formed by deleting some characters of the given string. 
If there are more than one possible results, return the longest word with the smallest lexicographical order. 
If there is no possible result, return the empty string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output: 
"apple"
Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]

Output: 
"a"
Note:
All the strings in the input will only contain lower-case letters.
The size of the dictionary won't exceed 1,000.
The length of all the strings in the input won't exceed 1,000.
*/
var findLongestWord = function(s, d) {
   let mx='';
    for(let word of d){
        let i=0,j=0;
        while(i<s.length&&j<word.length){
            if(s[i]==word[j]){
                i++;j++;
            }
            else
                i++;
        }
        if(j>=word.length){
            if(word.length>mx.length)
                mx=word;
            else if(word.length==mx.length&&mx.localeCompare(word)>0)
                mx=word;
        }
            
    }
    return mx; 
};