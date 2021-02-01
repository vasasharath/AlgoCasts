/*
In an election, the i-th vote was cast for persons[i] at time times[i].

Now, we would like to implement the following query function: TopVotedCandidate.q(int t) will return the number of the person that was leading the election at time t.  

Votes cast at time t will count towards our query.  In the case of a tie, the most recent vote (among tied candidates) wins.

 

Example 1:

Input: ["TopVotedCandidate","q","q","q","q","q","q"], [[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]
Output: [null,0,1,1,0,0,1]
Explanation: 
At time 3, the votes are [0], and 0 is leading.
At time 12, the votes are [0,1,1], and 1 is leading.
At time 25, the votes are [0,1,1,0,0,1], and 1 is leading (as ties go to the most recent vote.)
This continues for 3 more queries at time 15, 24, and 8.
 

Note:

1 <= persons.length = times.length <= 5000
0 <= persons[i] <= persons.length
times is a strictly increasing array with all elements in [0, 10^9].
TopVotedCandidate.q is called at most 10000 times per test case.
TopVotedCandidate.q(int t) is always called with t >= times[0].
*/
var TopVotedCandidate = function(persons, times) {
  const votes = new Map();
  
  this._votes = Array(times.length);
  this._times = times;
  
  let maxVotes = 0;
  let maxPerson = 0;
  for (let [index, time] of times.entries()) {
    const vote = persons[index];
    const count = votes.has(vote) ? votes.get(vote) + 1 : 1;
    votes.set(vote, count);
    
    if (count >= maxVotes) {
      maxVotes = count;
      maxPerson = vote;
    }
    
    this._votes[index] = maxPerson;
  }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  const last = this._times.length - 1;
  if (t >= this._times[last]) {
    return this._votes[last];
  }
  
  if (t === this._times[0]) {
    return this._votes[0];
  }
  
  let i = 0;
  let j = last;
  
  while (j - i > 1) {
    const mid = Math.floor((j + i) / 2);
    const time = this._times[mid];
    
    if (time === t) {
      return this._votes[mid];
    }
    
    if (time > t) {
      j = mid;
      continue;
    }
    
    i = mid;
  }
  
  return this._votes[i];
};