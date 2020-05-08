/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
*/
var wordBreak = function(s, wordDict) {
     const dic = new Set(wordDict);
  const map = new Map();
  return dfs(s);

  function dfs(str) {
    if (map.has(str)) {
      return map.get(str);
    }
    const tmp = [];
    if (dic.has(str)) tmp.push(str)
    for (let i = 1; i < str.length; i++) {
      const left = str.substring(0, i);
      if (!dic.has(left)) continue;
      const rightResArr = dfs(str.substring(i))
      for (let rightRes of rightResArr) {
        tmp.push(`${left} ${rightRes}`)
      }
    }
    map.set(str, tmp)
    return tmp;
  }
};