/*
We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)".  Then, we removed all commas, decimal points, and spaces, and ended up with the string S.  Return a list of strings representing all possibilities for what our original coordinates could have been.

Our original representation never had extraneous zeroes, so we never started with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with less digits.  Also, a decimal point within a number never occurs without at least one digit occuring before it, so we never started with numbers like ".1".

The final answer list can be returned in any order.  Also note that all coordinates in the final answer have exactly one space between them (occurring after the comma.)

Example 1:
Input: "(123)"
Output: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
Example 2:
Input: "(00011)"
Output:  ["(0.001, 1)", "(0, 0.011)"]
Explanation: 
0.0, 00, 0001 or 00.01 are not allowed.
Example 3:
Input: "(0123)"
Output: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
Example 4:
Input: "(100)"
Output: [(10, 0)]
Explanation: 
1.0 is not allowed.
 

Note:

4 <= S.length <= 12.
S[0] = "(", S[S.length - 1] = ")", and the other elements in S are digits.
*/
function ambiguousCoordinates(S) {
    S = S.slice(1, S.length - 1);
    let arr = [];

    // Separate in 2 parts. All possible ways (just put comma in all possible places).
    for (let i = 1; i < S.length; i++) {
        // get all possible (distinct) numbers that a string can be converted to. Do this for string1 and string2
        let p1 = combos(S.slice(0, i));
        let p2 = combos(S.slice(i));


        if (p1.length && p2.length) {
            for (let x1 of p1) {
                for (let x2 of p2) {
                    arr.push([x1, x2]);
                }
            }
        }
    }
    return arr.map(e => `(${e[0]}, ${e[1]})`);
}

// get all possible (distinct) numbers that a string can be converted to.
function combos(s) {
    let set = new Set(); // Use set so that it keeps distinct values
    if (String(Number(s)).length === s.length) set.add(Number(s));
    if (s.length === 1) return [...set];

    // Just put a dot in all possible places.
    for (let i = 1; i < s.length; i++) {
        let x = Number(s.slice(0, i) + '.' + s.slice(i));

        // Don't add if some digits were lost during convert (e.g. 0012 --> 12)
        if (String(x).length === (s.length + 1)) set.add(x);
    }
    return [...set];
}