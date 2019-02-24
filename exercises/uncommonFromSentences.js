/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

 

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]
 

Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
*/
var findSingleUse = function(str) {
    let result = [],
        map = str.split(" ").reduce((obj, c) => {
        obj[c] = obj[c] + 1 || 1;
        return obj;
    }, {});
    for (let char in map) {
        if (map[char] === 1) result.push(char)
    }
    return result;
}

var findNoAppearances = function(map, str) {
    let result = [];
    for(let char of map) {
        if(str.split(" ").indexOf(char) === -1) {
            result.push(char);
        }
    }
    return result;
}

var uncommonFromSentences = function(A, B) {
    
    if (A === '' && B === '') {
       return [];
    } 
    
    let mapA = findSingleUse(A), mapB = findSingleUse(B);
    
    let resultA = findNoAppearances(mapA, B), 
        resultB = findNoAppearances(mapB, A);

    return resultA.concat(resultB)
    
};