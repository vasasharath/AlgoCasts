/*
Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Example 1:

Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:

As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
Example 2:

Input: S = "babgbag", T = "bag"
Output: 5
Explanation:

As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
    */
var numDistinct = function(S, T) {
   if (S.length < T.length || T.length === 0 || S.length === 0) return 0;
    else if (S == T) return 1;
    else {
        var zero = Array.apply(null, new Array(S.length)).map(Number.prototype.valueOf,0);
        var previous = zero.slice();
        var current  = zero.slice();
        for (var i=0; i < T.length; i++) {
            var sum = 0;
            for (var j=0; j < S.length; j++) {
                if (T[i] === S[j]) {
                    current[j] = (i === 0 ? 1: sum);
                }
                sum += previous[j];
            }
            previous = current.slice();
            current  = zero.slice();
        }
        return previous.reduce(function(a,b) {return a+b});
    } 
};    