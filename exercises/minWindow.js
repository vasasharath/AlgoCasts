/*
Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

Example 1:

Input: 
S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation: 
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of T in the window must occur in order.
 

Note:

All the strings in the input will only contain lowercase letters.
The length of S will be in the range [1, 20000].
The length of T will be in the range [1, 100].
*/
var minWindow = function(S, T) {
  let sIndex = 0
  let tIndex = 0
  let sLen = S.length
  let tLen = T.length

  let result = ''
  let subStringLen = Number.MAX_VALUE

  // until all characters of S have been iterated
  while (sIndex < sLen) {

    // the current character of S matches the current character of the pattern T
    if (S[sIndex] === T[tIndex]) {
      tIndex++ // advance the P (pattern) pointer

      // all of the pattern's characters have been matched
      if (tIndex === tLen) {
        let end = sIndex + 1 // index after the last matched character
        tIndex-- // move the P pointer back to the last matched character

        // moves the P pointer back until all matches exhausted (index = -1)
        // moves the S pointer back to the index before the first match index
        while (tIndex >= 0) {
          if (S[sIndex] === T[tIndex]) {
            tIndex--
          }
          sIndex--
        }

        sIndex++ // move S pointer to the first match index
        tIndex++ // move T pointer to zero

        // update substring length and result if better than current best
        if (end - sIndex < subStringLen) {
          subStringLen = end - sIndex
          result = S.substring(sIndex, end)
        }
      }
    }

    sIndex++ // advance the S pointer
  }

  return subStringLen === Number.MAX_VALUE ? '' : result
}