/*
Alice has a hand of cards, given as an array of integers.

Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

Return true if and only if she can.

Note: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
Example 2:

Input: hand = [1,2,3,4,5], W = 4
Output: false
Explanation: Alice's hand can't be rearranged into groups of 4.

 

Constraints:

1 <= hand.length <= 10000
0 <= hand[i] <= 10^9
1 <= W <= hand.length
*/
var isNStraightHand = function(hand, W) {
    if (hand.length % W !== 0) return false; // minor optimization
    
    hand.sort((a, b) => a - b); // sort hand ascending order
    
    // count of card
    let map = new Map();
    for (let card of hand) {
        map.set(card, (map.get(card) || 0) + 1);
    }
    
    for (let [card, count] of map) {
      if (count > 0) {
	// if count is greater than 0 then check next W - 1 consecutive card.
        for (let i = 1; i < W; i++) {
            if ((map.get(card + i) || 0) < count)  return false;
            map.set(card + i, map.get(card + i) - count);
        }
      }
    }
    
    return true;
};