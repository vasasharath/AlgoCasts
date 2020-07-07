/*
Given a rows x cols screen and a sentence represented by a list of non-empty words, find how many times the given sentence can be fitted on the screen.

Note:

A word cannot be split into two lines.
The order of words in the sentence must remain unchanged.
Two consecutive words in a line must be separated by a single space.
Total words in the sentence won't exceed 100.
Length of each word is greater than 0 and won't exceed 10.
1 ≤ rows, cols ≤ 20,000.
Example 1:

Input:
rows = 2, cols = 8, sentence = ["hello", "world"]

Output: 
1

Explanation:
hello---
world---

The character '-' signifies an empty space on the screen.
Example 2:

Input:
rows = 3, cols = 6, sentence = ["a", "bcd", "e"]

Output: 
2

Explanation:
a-bcd- 
e-a---
bcd-e-

The character '-' signifies an empty space on the screen.
Example 3:

Input:
rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]

Output: 
1

Explanation:
I-had
apple
pie-I
had--

The character '-' signifies an empty space on the screen.
*/
var wordsTyping = function(sentence, rows, cols) {
    // dp[i] means when a row start with sentence[i],
    // the number of words that row can have
    let len = sentence.length
    let dp = new Array(len)
    for (let i=0, count=0, size=0; i<len; i++) {
        // decrease the length of prev word, as well as the extra space
        if (i > 0) {
            size -= sentence[i-1].length + 1
            count--
        }
        while (size + sentence[(i+count) % len].length <= cols) {
		    // add the length of the current word, as well as the extra space
            size += sentence[(i+count) % len].length + 1
            count++
        }
        dp[i] = count
    }
    let total = 0
    for (let i=0; i<rows; i++) {
        total += dp[total % len]
    }
    return Math.trunc(total / len)
};