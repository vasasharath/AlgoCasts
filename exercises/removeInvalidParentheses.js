/*
Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]
*/
var removeInvalidParentheses = function(s) {
     if (s.length === 0) return [''];
    // Helper to count invalid left and right brackets
    let invalidL = 0;
    let invalidR = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            invalidL += 1;
        } else if (s[i] === ')') {
            if (invalidL > 0) { 
                invalidL -= 1;
            } else {
                invalidR += 1;
            }
        }
    }

    const uniqueResults = {};

 
    // recursive function to try removing parens
    const removeParens = (s, uniqueResults, left, right, sIdx, currString, open) => {
        if ( left < 0 || right < 0 || open < 0 || s.length < sIdx) return;
        if (sIdx === s.length && left === 0 && right === 0 && open === 0) {
            //check if we already have it
            if (!uniqueResults.hasOwnProperty(currString)) {
                uniqueResults[currString] = true;
            }
            return;
        }

        if (s[sIdx] === '(') {
            // We take it
            removeParens(s, uniqueResults, left, right, sIdx + 1, currString + '(', open + 1);
            // We dont take it
            removeParens(s, uniqueResults, left - 1, right, sIdx + 1, currString, open);
        } else if (s[sIdx] === ')') {
            // We take it
            removeParens(s, uniqueResults, left, right, sIdx + 1, currString + ')', open - 1);
            // We dont take it
            removeParens(s, uniqueResults, left, right - 1, sIdx + 1, currString, open);
        } else {
            // nothing to take, keep moving
            removeParens(s, uniqueResults, left, right, sIdx + 1, currString + s[sIdx], open);
        }
    }
    removeParens(s, uniqueResults, invalidL, invalidR, 0, '', 0);
    results = Object.keys(uniqueResults);
    return results;
};