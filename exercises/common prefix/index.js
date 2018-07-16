/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/
var longestCommonPrefix = function(arr) {
    if(arr == null || arr.length == 0)
        return "";
    // sort() method arranges array elements alphabetically
    var sortArr = arr.sort();
    
    // Get first array element    
    var arrFirstElem = arr[0];
  
    // Get the last array element length minus one
    var arrLastElem = sortArr[sortArr.length - 1]; 
    
    // Get first array element length
    var arrFirstElemLength = arrFirstElem.length; 
    
    // Set "i" incrementer to 0
    var i= 0;
    
    // while "i" is less than the length of the first array element AND
    // the first array element character position matches the last array character position
    // increment "i" by one
    while(i < arrFirstElemLength && arrFirstElem.charAt(i) === arrLastElem.charAt(i)) {
      i++;
    }
    return arrFirstElem.substring(0, i);
};