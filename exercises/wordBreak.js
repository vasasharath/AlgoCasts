/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/
var wordBreak = function(s, wordDict) {
    function recursive(start, table) {
		// if start point is same with length of string, it' done.
        if(start === s.length) return true;
		
		// if table's start index is true or false, this means that index already checked.
		// so just return true or false to save time.
        if(table[start] === false) return false;
        if(table[start] === true) return true;
		
		// to save the return value of recursive function
        let returnBool = false;
		
        for(let word of wordDict) {
            const end = start + word.length;
            if(end > s.length) continue;
			
			// check the subString is matched with word of wordDict
            if(s.slice(start, end) === word) {
				// save the return value to returnBool
                if(recursive(end, table)) returnBool = true;
            }
        }
		
		// cache the result to the table we made.
        table[start] = returnBool;
		
		// finally return the real result.
        return returnBool;
    }
	
	// use this array for caching result of each start index
    let table = [];
	
	// return result
    return recursive(0, table);
}