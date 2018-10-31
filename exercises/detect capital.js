/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
Note: The input will be a non-empty word consisting of uppercase and lowercase latin letters.
*/
var detectCapitalUse = function(word) {
    let capitalCounter = 0;
    let smallCounter = 0;
    for(let i =0; i<word.length;i++) {
        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) capitalCounter ++
        else smallCounter++
    }
    
    if(capitalCounter == word.length || smallCounter == word.length) return true;
    else if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90 && capitalCounter == 1) return true;
    return false
};