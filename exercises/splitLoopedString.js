/*
Given a list of strings, you could concatenate these strings together into a loop, where for each string you could choose to reverse it or not. Among all the possible loops, you need to find the lexicographically biggest string after cutting the loop, which will make the looped string into a regular one.

Specifically, to find the lexicographically biggest string, you need to experience two phases:

Concatenate all the strings into a loop, where you can reverse some strings or not and connect them in the same order as given.
Cut and make one breakpoint in any place of the loop, which will make the looped string into a regular one starting from the character at the cutpoint.
And your job is to find the lexicographically biggest one among all the possible regular strings.

Example:
Input: "abc", "xyz"
Output: "zyxcba"
Explanation: You can get the looped string "-abcxyz-", "-abczyx-", "-cbaxyz-", "-cbazyx-", 
where '-' represents the looped status. 
The answer string came from the fourth looped one, 
where you could cut from the middle character 'a' and get "zyxcba".
Note:
The input strings will only contain lowercase letters.
The total length of all the strings will not over 1,000.
*/
var splitLoopedString = function(strs) {
    let maxChar = '';
    let N = strs.length;
    let st = strs.map(str => {
        let rev = '';
        for (let j = str.length-1; j >= 0; j--) {
            rev += str[j];
            if (str[j] > maxChar) maxChar = str[j];
        }
        if (rev > str) return [rev, str];
        else return [str, rev];
    });

    let ans = '';
    for (let i = 0; i < N; i++) {
        let other = '';
        for (let k = (i+1)%N; k != i; k = (k+1)%N) other += st[k][0];
        for (let s of st[i]) {
            for (let j = 0; j < s.length; j++) {
                if (s[j] !== maxChar) continue;
                let cur = s.slice(j) + other + s.slice(0, j);
                if (cur > ans) ans = cur;
            }
        }
    }
    return ans;
};