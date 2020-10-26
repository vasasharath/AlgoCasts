/*
Given a set of keywords words and a string S, make all appearances of all keywords in S bold. Any letters between <b> and </b> tags become bold.

The returned string should use the least number of tags possible, and of course the tags should form a valid combination.

For example, given that words = ["ab", "bc"] and S = "aabcd", we should return "a<b>abc</b>d". Note that returning "a<b>a<b>b</b>c</b>d" would use more tags, so it is incorrect.

Constraints:

words has length in range [0, 50].
words[i] has length in range [1, 10].
S has length in range [0, 500].
All characters in words[i] and S are lowercase letters.
*/
var boldWords = function(words, S) {
    let boldMap = new Array(S.length).fill(0);
    
    // for each word, mark all matches
    for (let i = 0; i < words.length; i++) {
        let match = -1;
        while ( (match = S.indexOf(words[i], match+1)) > -1 ) {
            for (let j = match; j < match + words[i].length; j++) {
                boldMap[j] = 1;
            }
        }
    }
    
    let res = '';
    let openTag = false;
    for (let i = 0; i < S.length; i++) {
        if (boldMap[i] && !openTag) {
            res += `<b>`;
            openTag = true;
        } else if (!boldMap[i] && openTag) {
            res += `</b>`;
            openTag = false;
        }
        res += S[i];
    }
    
    res += openTag ? `</b>` : ``;
    
    return res;
};