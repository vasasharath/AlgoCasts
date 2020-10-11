/*
Given two sentences words1, words2 (each represented as an array of strings), and a list of similar word pairs pairs, determine if two sentences are similar.

For example, words1 = ["great", "acting", "skills"] and words2 = ["fine", "drama", "talent"] are similar, if the similar word pairs are pairs = [["great", "good"], ["fine", "good"], ["acting","drama"], ["skills","talent"]].

Note that the similarity relation is transitive. For example, if "great" and "good" are similar, and "fine" and "good" are similar, then "great" and "fine" are similar.

Similarity is also symmetric. For example, "great" and "fine" being similar is the same as "fine" and "great" being similar.

Also, a word is always similar with itself. For example, the sentences words1 = ["great"], words2 = ["great"], pairs = [] are similar, even though there are no specified similar word pairs.

Finally, sentences can only be similar if they have the same number of words. So a sentence like words1 = ["great"] can never be similar to words2 = ["doubleplus","good"].

Note:

The length of words1 and words2 will not exceed 1000.
The length of pairs will not exceed 2000.
The length of each pairs[i] will be 2.
The length of each words[i] and pairs[i][j] will be in the range [1, 20].
*/
var areSentencesSimilarTwo = function(words1, words2, pairs) {
  if(words1.length !== words2.length) return false;
	
  const unionFind  = new UnionFind(2 * pairs.length);
  const index      = {};
  let currentIndex = 0;
  
  for(let pair of pairs) {
    for(word of pair) {
      if(!index.hasOwnProperty(word)) {
        index[word] = currentIndex;
        currentIndex++;
      }
    }
    
    unionFind.union(index[pair[0]], index[pair[1]]);
  }
    
  for(let i = 0; i < words1.length; i++) {
    const word1 = words1[i];
    const word2 = words2[i];
    if(word1 === word2) continue;
    
    const word1Idx = index[word1];
    const word2Idx = index[word2];
    if(!unionFind.connected(word1Idx, word2Idx)) return false;  
  }
    
  return true;
};

class UnionFind {
  constructor(length) {
    this.parent = new Array(length);
    for(let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
    } 
  }
  
  root(element) {
    while(this.parent[element] !== element) {
      element = this.parent[element];
    }
    return element;
  }
  
  connected(element1, element2) {
    return this.root(element1) === this.root(element2);
  }
  
  union(element1, element2) {
    const root1 = this.root(element1);
    const root2 = this.root(element2);
    this.parent[root1] = root2;
  }
}