/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/
var toLowerCase = function(str) {
     let lowerCase = "";
    
    for (let letter of str) {
        const index = letter.charCodeAt(0);
        if (index >= 65 && index <= 90) {
            letter = String.fromCharCode(index + 32);
        }
        lowerCase += letter;
    }
    
    return lowerCase;
};