/*
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area

Example:

Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45
Note:

Assume that the total area is never beyond the maximum possible value of int.
*/
var computeArea = function(a, b, c, d, e, f, g, h) {
   let totalArea = ((g-e)*(h-f))+((c-a)*(d-b))

let width = Math.min(c,g) - Math.max(a,e);
let height = Math.min(d,h) - Math.max(b,f);
let area = 0;
if(width>0 && height>0){
area = width*height;
}
return totalArea - area 
};