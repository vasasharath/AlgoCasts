/*
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
 

Example 1:

Input: [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
Example 2:

Input: [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
Example 3:

Input: [1]
Output: false
Explanation: No possible partition.
Example 4:

Input: [1,1]
Output: true
Explanation: Possible partition [1,1]
Example 5:

Input: [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2]

Note:

1 <= deck.length <= 10000
0 <= deck[i] < 10000
*/
var hasGroupsSizeX = function(deck) {
    let map = {};
    
    for (let i = 0; i < deck.length; i++) {
        map[deck[i]] = (map[deck[i]] || 0) + 1;
    }

    let minX;
    for (let key in map) {
        if (minX == undefined) {
            minX = map[key];
            continue;
        }
        
        minX = gcd(minX, map[key]);
        if (minX < 2) return false;
    }
    
    return minX >= 2;
};

function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}
