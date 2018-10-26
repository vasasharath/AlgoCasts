/*
Given a List of words, return the words that can be typed using letters of alphabet 
on only one row's of American keyboard like the image below.

 



 
Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
 

Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/
var findWords = function(words) {
    let arr = [];
    words.map(key=>{
        let cnt = /[qwertyuiop]/gi.test(key) + /[asdfghjkl]/gi.test(key) + /[zxcvbnm]/gi.test(key);
        if(cnt===1){
            arr.push(key);
        }
    })
    return arr;
};