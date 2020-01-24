/*
Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

Example:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True
 

Note:

All the input integers are in the range [-10000, 10000].
A valid square has four equal sides with positive length and four equal angles (90-degree angles).
Input points have no order.
*/
var validSquare = function(p1, p2, p3, p4) {
    if (new Set([p1.join(','), p2.join(','), p3.join(','), p4.join(',')]).size !== 4) return false;
    const points = [p1, p2, p3, p4];
    const combos = [[0,1,2], [0,1,3], [0,2,3], [1,2,3]];
    const dists = new Set();
    for (let c of combos) {
        dists.add(dist(points[c[0]], points[c[1]]));
        dists.add(dist(points[c[1]], points[c[2]]));
        dists.add(dist(points[c[0]], points[c[2]]));
    }
    return dists.size === 2;
};

function dist(a, b) {
    return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
};