/*
In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different amounts of money, and different levels of quietness.

For convenience, we'll call the person with label x, simply "person x".

We'll say that richer[i] = [x, y] if person x definitely has more money than person y.  Note that richer may only be a subset of valid observations.

Also, we'll say quiet[x] = q if person x has quietness q.

Now, return answer, where answer[x] = y if y is the least quiet person (that is, the person y with the smallest value of quiet[y]), among all people who definitely have equal to or more money than person x.

 

Example 1:

Input: richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
Output: [5,5,2,5,4,5,6,7]
Explanation: 
answer[0] = 5.
Person 5 has more money than 3, which has more money than 1, which has more money than 0.
The only person who is quieter (has lower quiet[x]) is person 7, but
it isn't clear if they have more money than person 0.

answer[7] = 7.
Among all people that definitely have equal to or more money than person 7
(which could be persons 3, 4, 5, 6, or 7), the person who is the quietest (has lower quiet[x])
is person 7.

The other answers can be filled out with similar reasoning.
Note:

1 <= quiet.length = N <= 500
0 <= quiet[i] < N, all quiet[i] are different.
0 <= richer.length <= N * (N-1) / 2
0 <= richer[i][j] < N
richer[i][0] != richer[i][1]
richer[i]'s are all different.
The observations in richer are all logically consistent.
*/
class Node {
  constructor(number, q) {
    this.number = number;
    this.q = q;
    this.minNodeInSubtree = null; // among this and richer nodes
    this.richer = [];
  }
  
  getLeastQuietNode() {
    if(!this.minNodeInSubtree) {
      this.minNodeInSubtree = this;
      for(const n of this.richer) {
        const nlqn = n.getLeastQuietNode();
        if(nlqn.q < this.minNodeInSubtree.q)
          this.minNodeInSubtree = nlqn;
      }
    }
    return this.minNodeInSubtree;
  }
}

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
  const N = quiet.length;
  const nodes = new Array(N);
  for(let i=0; i<N; i++)
    nodes[i] = new Node(i, quiet[i]);
  richer.forEach( ([x,y]) => {
    nodes[y].richer.push(nodes[x]);
  });

  return nodes.map(n => n.getLeastQuietNode().number);
};