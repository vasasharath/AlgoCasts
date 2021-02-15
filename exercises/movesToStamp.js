/*
You want to form a target string of lowercase letters.

At the beginning, your sequence is target.length '?' marks.  You also have a stamp of lowercase letters.

On each turn, you may place the stamp over the sequence, and replace every letter in the sequence with the corresponding letter from the stamp.  You can make up to 10 * target.length turns.

For example, if the initial sequence is "?????", and your stamp is "abc",  then you may make "abc??", "?abc?", "??abc" in the first turn.  (Note that the stamp must be fully contained in the boundaries of the sequence in order to stamp.)

If the sequence is possible to stamp, then return an array of the index of the left-most letter being stamped at each turn.  If the sequence is not possible to stamp, return an empty array.

For example, if the sequence is "ababc", and the stamp is "abc", then we could return the answer [0, 2], corresponding to the moves "?????" -> "abc??" -> "ababc".

Also, if the sequence is possible to stamp, it is guaranteed it is possible to stamp within 10 * target.length moves.  Any answers specifying more than this number of moves will not be accepted.

 

Example 1:

Input: stamp = "abc", target = "ababc"
Output: [0,2]
([1,0,2] would also be accepted as an answer, as well as some other answers.)
Example 2:

Input: stamp = "abca", target = "aabcaca"
Output: [3,0,1]
 

Note:

1 <= stamp.length <= target.length <= 1000
stamp and target only contain lowercase letters.
*/
const movesToStamp = function (stamp, target) {
  const S = stamp.split('')
  const T = target.split('')
  const res = []
  const visited = Array(T.length).fill(false)
  let stars = 0

  while (stars < T.length) {
    let doneReplace = false
    for (let i = 0; i <= T.length - S.length; i++) {
      if (!visited[i] && canReplace(T, i, S)) {
        stars = doReplace(T, i, S.length, stars)
        doneReplace = true
        visited[i] = true
        res.push(i)
        if (stars === T.length) {
          break
        }
      }
    }

    if (!doneReplace) {
      return []
    }
  }

  const resArray = Array(res.length).fill(0)
  for (let i = 0; i < res.length; i++) {
    resArray[i] = res[res.length - i - 1]
  }
  return resArray
  function canReplace(T, p, S) {
    for (let i = 0; i < S.length; i++) {
      if (T[i + p] !== '*' && T[i + p] !== S[i]) {
        return false
      }
    }
    return true
  }

  function doReplace(T, p, len, count) {
    for (let i = 0; i < len; i++) {
      if (T[i + p] !== '*') {
        T[i + p] = '*'
        count++
      }
    }
    return count
  }
}
