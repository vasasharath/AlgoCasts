/*
Check whether the original sequence org can be uniquely reconstructed from the sequences in seqs. The org sequence is a permutation of the integers from 1 to n, with 1 ≤ n ≤ 104. Reconstruction means building a shortest common supersequence of the sequences in seqs (i.e., a shortest sequence so that all sequences in seqs are subsequences of it). Determine whether there is only one sequence that can be reconstructed from seqs and it is the org sequence.

 

Example 1:

Input: org = [1,2,3], seqs = [[1,2],[1,3]]
Output: false
Explanation: [1,2,3] is not the only one sequence that can be reconstructed, because [1,3,2] is also a valid sequence that can be reconstructed.
Example 2:

Input: org = [1,2,3], seqs = [[1,2]]
Output: false
Explanation: The reconstructed sequence can only be [1,2].
Example 3:

Input: org = [1,2,3], seqs = [[1,2],[1,3],[2,3]]
Output: true
Explanation: The sequences [1,2], [1,3], and [2,3] can uniquely reconstruct the original sequence [1,2,3].
Example 4:

Input: org = [4,1,5,2,6,3], seqs = [[5,2,6,3],[4,1,5,2]]
Output: true
 

Constraints:

1 <= n <= 10^4
org is a permutation of {1,2,...,n}.
1 <= segs[i].length <= 10^5
seqs[i][j] fits in a 32-bit signed integer.
*/
var sequenceReconstruction = function(org, seqs) {
  let set = new Set();
  for(s of seqs) {
    if (s.length === 1) {
      set.add('' + s[0]);
    } else {
      for(let i = 1; i < s.length; i++) {
        set.add(s[i-1] + '-' + s[i]);
      }
    }
  }

  if (set.size === 0) return false;
  for(let i = 1; i < org.length; i++) {
    let k = org[i-1] + '-' + org[i];
    if (!set.has(k)) return false;
    else set.delete(k);
  }

  if (set.size) {
    if (set.size === 1 && org.length === 1) {
      return set.has('' + org[0]);
    } else {
      for(let k of set) {
        if (k.indexOf('-') > -1) {
          let [a,b] = k.split('-');
          let aa = Number.parseInt(a);
          let bb = Number.parseInt(b);
          if (org.indexOf(aa) >= org.indexOf(bb)) return false;
        } else if (org.indexOf(Number.parseInt(k)) === -1) {
          return false;
        }
      }
    }
  }

  return true;
};