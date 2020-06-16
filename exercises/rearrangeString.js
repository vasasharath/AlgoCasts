/*
Given a non-empty string s and an integer k, rearrange the string such that the same characters are at least distance k from each other.

All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string "".

Example 1:

Input: s = "aabbcc", k = 3
Output: "abcabc" 
Explanation: The same letters are at least distance 3 from each other.
Example 2:

Input: s = "aaabc", k = 3
Output: "" 
Explanation: It is not possible to rearrange the string.
Example 3:

Input: s = "aaadbbcc", k = 2
Output: "abacabcd"
Explanation: The same letters are at least distance 2 from each other.
*/
var rearrangeString = function(s, k) {
    if (s.length < 2 || !k) return s;
    const buckets = [];
    let a = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        let key = s.charCodeAt(i) - a;
        buckets[key] = (buckets[key] || 0) + 1;
    }
    let res = '';
    let added = { length: 0 };
    while (res.length < s.length) {
        let maxIndex = -1;
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i] && !added[i] && (maxIndex === -1 || buckets[i] > buckets[maxIndex])) {
                maxIndex = i;
            }
        }
        if (maxIndex === -1) return '';
        res += String.fromCharCode(a + maxIndex);
        buckets[maxIndex]--;
        added[maxIndex] = 1;
        if (++added.length === k) added = { length: 0 };
    }
    return res;
};