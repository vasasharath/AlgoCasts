/*
Given a list of points that form a polygon when joined sequentially, find if this polygon is convex (Convex polygon definition).

 

Note:

There are at least 3 and at most 10,000 points.
Coordinates are in the range -10,000 to 10,000.
You may assume the polygon formed by given points is always a simple polygon (Simple polygon definition). In other words, we ensure that exactly two edges intersect at each vertex, and that edges otherwise don't intersect each other.
 

Example 1:

[[0,0],[0,1],[1,1],[1,0]]

Answer: True

Explanation:
Example 2:

[[0,0],[0,10],[10,10],[10,0],[5,5]]

Answer: False

Explanation:
*/
var isConvex = function(points) {
    let negative = false
    let positive = false
    const num = points.length
    for(let p1=0; p1 < num; p1 += 1) {
        const p2 = (p1 + 1) % num
        const p3 = (p2 + 1) % num
        const Ax = points[p1][0]
        const Ay = points[p1][1]
        const Bx = points[p2][0]
        const By = points[p2][1]
        const Cx = points[p3][0]
        const Cy = points[p3][1]
        const crossProduct = CrossProductLength(Ax, Ay, Bx, By, Cx, Cy)
        if (crossProduct < 0) {
            negative = true
        } else if (crossProduct > 0) {
            positive = true
        }
        if (negative && positive) return false
    }
    return true
};

function CrossProductLength(Ax, Ay, Bx, By, Cx, Cy) {
    const BAx = Ax - Bx
    const BAy = Ay - By
    const BCx = Cx - Bx
    const BCy = Cy - By
    return BAx * BCy - BAy * BCx
}