/*
In the "100 game," two players take turns adding, to a running total, any integer from 1..10. The player who first causes the running total to reach or exceed 100 wins.

What if we change the game so that players cannot re-use integers?

For example, two players might take turns drawing from a common pool of numbers of 1..15 without replacement until they reach a total >= 100.

Given an integer maxChoosableInteger and another integer desiredTotal, determine if the first player to move can force a win, assuming both players play optimally.

You can always assume that maxChoosableInteger will not be larger than 20 and desiredTotal will not be larger than 300.

Example

Input:
maxChoosableInteger = 10
desiredTotal = 11

Output:
false

Explanation:
No matter which integer the first player choose, the first player will lose.
The first player can choose an integer from 1 up to 10.
If the first player choose 1, the second player can only choose integers from 2 up to 10.
The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
Same with other integers chosen by the first player, the second player will always win.
*/
var canIWin = function(maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= 0) return true;
    if (maxChoosableInteger >= desiredTotal) return true;
    if ((maxChoosableInteger + 1) * (maxChoosableInteger / 2) < desiredTotal) return false;

    return canWin(desiredTotal, 0, new Map(), maxChoosableInteger);
};

const canWin = (total, position, cache, n) => {
    if (total < 1) return false;
    if (cache.has(position)) return cache.get(position);

    for (var i = 1; i <= n; ++i) {
        if (position & (1 << i)) continue;

        position |= 1 << i;
        const isWinningMove = !canWin(total - i, position, cache, n);
        position &= ~(1 << i);
        if (isWinningMove) {
            return cache.set(position, true).get(position);
        }
    }
    cache.set(position, false);
    return false;
};