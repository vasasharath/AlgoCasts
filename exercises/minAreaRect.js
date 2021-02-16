/*
Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from these points, with sides parallel to the x and y axes.

If there isn't any rectangle, return 0.

 

Example 1:

Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4
Example 2:

Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2
 

Note:

1 <= points.length <= 500
0 <= points[i][0] <= 40000
0 <= points[i][1] <= 40000
All points are distinct.
*/
var minAreaRect = function(points) {
			let result = 0;
			let pointSet = {};
			let counter = 0;

			points.map((val) => {
				if (pointSet.hasOwnProperty(val[0])) {
					pointSet[val[0]].add(val[1]);
				} else {
					pointSet[val[0]]= new Set([val[1]]);
				}
			});

			for (let i = 0; i < points.length; i++) {
				for (let j = i + 1; j < points.length; j++) {
					if (points[i][0] !== points[j][0] && points[i][1] !== points[j][1]) {
						if (findPoint(pointSet, [points[i][0], points[j][1]]) && findPoint(pointSet, [points[j][0], points[i][1]])) {
							let area = Math.abs(points[i][0] - points[j][0]) * Math.abs(points[i][1] - points[j][1]);

							if (counter === 0) {
								result = Math.max(result, area);
								counter++;
							} else {
								result = Math.min(result, area);
							}
						} 
					}
				}
			}

			return result;
		};

		const findPoint = (set, point) => {
			if (set.hasOwnProperty(point[0])) {
				return set[point[0]].has(point[1]);
			} else {
				return false;
			}
		};