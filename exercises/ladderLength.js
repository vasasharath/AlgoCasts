/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/
var ladderLength = function(beginWord, endWord, wordList) {
     let dict = wordList.reduce((set, word) => {
    set.add(word);
    return set;
  }, new Set());

  if (!dict.has(endWord)) {
    return 0;
  }

  let final = 0, step = 0;
  let l = beginWord.length;
  let s1 = new Set([beginWord]),
    s2 = new Set([endWord]);

  let done = false;
  while (s1.size > 0 && s2.size > 0 && !done) {
    ++step;

    if (s1.size > s2.size) {
      [s1, s2] = [s2, s1];
    }

    let s = new Set();

    s1.forEach(word => {
      for (let i = 0; i < l; i++) {
        for (let j = 0; j < 26; j++) {
          let tryword =
            word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
          if (s2.has(tryword)) {
            final = step + 1;
            done = true;
          }
          if (!dict.has(tryword)) {
            continue;
          }
          dict.delete(tryword);
          s.add(tryword);
        }
      }
    });
    [s, s1] = [s1, s];
  }
  return final;
};