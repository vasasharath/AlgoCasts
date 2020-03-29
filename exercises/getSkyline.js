/*
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

Buildings Skyline Contour
The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

The output is a list of "key points" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].

Notes:

The number of buildings in any input list is guaranteed to be in the range [0, 10000].
The input list is already sorted in ascending order by the left x position Li.
The output list must be sorted by the x position.
There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...[2 3], [4 5], [12 7], ...]
*/
var getSkyline = function(buildings) {
    //determine the start point and end point of a building, also mark it as start or end. It is sorted by rule 
    var buildingPoints = getBuildingPoints(buildings); 
    var res = [];
    var queue = [0];
    var max = 0;
    
    for (var point of buildingPoints) {
        // pick each point: if start => push height to queue, end => remove height from queue. the queue is increasing
        if (point.isStart) {
            // start => push height to queue, find the index by binarySearch
            var index = binarySearch(queue, point.height);
            queue.splice(index, 0, point.height);
        }
        else {
            // remove height from queue
            var index = queue.indexOf(point.height);
            queue.splice(index, 1);
        }
        
        // if the push or remove changes the maxHeight, mean it moves to another block, push that point (x, maxCurrentHeight) to res
        var currentMax = queue[queue.length - 1];
        if (max != currentMax) {
            max = currentMax;
            res.push([point.x, max]);
        }
    }
    
    return res;
};

function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    var mid = 0;
    
    while(left < right) {
        mid = Math.floor(left + (right - left) / 2);
        
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    
    if (arr[left] < target) return ++left;
    return left;
}

function getBuildingPoints(buildings) {
    var buildingPoints = [];
    for (var building of buildings) {
        var start = {};
        start.x = building[0];
        start.height = building[2];
        start.isStart = true;
        buildingPoints.push(start);
        
        var end = {};
        end.x = building[1];
        end.height = building[2];
        buildingPoints.push(end);
        end.isStart = false;
    }
    
    buildingPoints.sort(compPareBuildingPoint);
    
    return buildingPoints;
}

function compPareBuildingPoint(a, b) {
    //first compare by x.
    if (a.x != b.x) return a.x - b.x;
    else {
        //If they are same then use this logic
        //if two starts are compared then higher height building should be picked first
        //if two ends are compared then lower height building should be picked first
        //if one start and end is compared then start should appear before end
        return (a.isStart ? -a.height : a.height) - (b.isStart ? -b.height : b.height);
    }
}