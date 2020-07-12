/*
Define S = [s,n] as the string S which consists of n connected strings s. For example, ["abc", 3] ="abcabcabc".

On the other hand, we define that string s1 can be obtained from string s2 if we can remove some characters from s2 such that it becomes s1. For example, “abc” can be obtained from “abdbec” based on our definition, but it can not be obtained from “acbbe”.

You are given two non-empty strings s1 and s2 (each at most 100 characters long) and two integers 0 ≤ n1 ≤ 106 and 1 ≤ n2 ≤ 106. Now consider the strings S1 and S2, where S1=[s1,n1] and S2=[s2,n2]. Find the maximum integer M such that [S2,M] can be obtained from S1.

Example:

Input:
s1="acb", n1=4
s2="ab", n2=2

Return:
2
*/
var getMaxRepetitions = function(s1, n1, s2, n2) {
    let j = 0, i, count = 0, perCycle = 0, firstEnd = -1, lastEnd = -1, nonMatch = 0;
    for(i = 0; i < s1.length * n1; i++) {
        if (s2[j] === s1[i % s1.length]) {
            j++;
            nonMatch = 0;
        }
        else if (++nonMatch >= s1.length) break;
        if (j === s2.length) {
            count++;
            perCycle++;
            j = 0;
            if (lastEnd !== -1) continue;
            else if (firstEnd === -1) {
                firstEnd = i;
                perCycle = 0;
            }
            else if ((i - firstEnd) % s1.length === 0) {
                let cycleLen = i - firstEnd;
                let remainLen = s1.length * n1 - i - 1;
                let cycles = Math.floor(remainLen / cycleLen);
                count += cycles * perCycle;
                i += cycles * cycleLen;
            }
        }
    }
    return Math.floor(count / n2);
};