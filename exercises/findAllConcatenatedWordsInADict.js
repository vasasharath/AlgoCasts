/*
Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example:
Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]

Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]

Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
 "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
Note:
The number of elements of the given array will not exceed 10,000
The length sum of elements in the given array will not exceed 600,000.
All the input string will only include lower case letters.
The returned elements order does not matter.
*/
var findAllConcatenatedWordsInADict = function(words) {
    let set = new Set(words);
    let result = [];
    function isConcat(word) {
        // using the set as memo here
        if (set.has(word)) {
            return true;
        }
        // iterate through word and recurse down
        for(let i=1; i<=word.length; i++) {
            let prefix = word.substring(0,i);
            if (set.has(prefix)) {
                // love this part
                // check for suffix broken into smaller parts
                let suffix = word.substring(i);
                if (isConcat(suffix)) {
                    set.add(suffix);
                    return true;
                }
            }
        }
    }
    for (let i=0; i<words.length; i++) {
        // delete the word itself from the set
        // before validating
        set.delete(words[i]);
        if (isConcat(words[i])) {
            result.push(words[i]);
        }
        // add back
        set.add(words[i]);
    }
    return result;
};