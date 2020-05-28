/*
Write a function to generate the generalized abbreviations of a word. 

Note: The order of the output does not matter.

Example:

Input: "word"
Output:
["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
*/
var generateAbbreviations = function(word) {
    var result = [];
    if(!word) return [''];
    var sb = [];
    dfs(result, sb, word, 0, 0);
    return result;
};
function dfs(result, sb, strs, num, index) {
    if(index === strs.length) {
        result.push(sb.join('')+(num?String(num):''));
        return;
    }
    dfs(result, sb, strs, num+1, index+1);
    if(num)sb.push(num);
    sb.push(strs.charAt(index));
    dfs(result, sb, strs, 0, index+1);
    sb.pop();
    if(num)sb.pop();
}