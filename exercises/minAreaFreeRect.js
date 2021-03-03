/*
Given a set of points in the xy-plane, determine the minimum area of any rectangle formed from these points, with sides not necessarily parallel to the x and y axes.

If there isn't any rectangle, return 0.

 

Example 1:



Input: [[1,2],[2,1],[1,0],[0,1]]
Output: 2.00000
Explanation: The minimum area rectangle occurs at [1,2],[2,1],[1,0],[0,1], with an area of 2.
Example 2:



Input: [[0,1],[2,1],[1,1],[1,0],[2,0]]
Output: 1.00000
Explanation: The minimum area rectangle occurs at [1,0],[1,1],[2,1],[2,0], with an area of 1.
Example 3:



Input: [[0,3],[1,2],[3,1],[1,3],[2,1]]
Output: 0
Explanation: There is no possible rectangle to form from these points.
Example 4:



Input: [[3,1],[1,1],[0,1],[2,1],[3,3],[3,2],[0,2],[2,3]]
Output: 2.00000
Explanation: The minimum area rectangle occurs at [2,1],[2,3],[3,3],[3,1], with an area of 2.
 

Note:

1 <= points.length <= 50
0 <= points[i][0] <= 40000
0 <= points[i][1] <= 40000
All points are distinct.
Answers within 10^-5 of the actual value will be accepted as correct.
*/
var minAreaFreeRect = function(points) {
    let area = Infinity , pointsMap = {} , len = points.length;
    
    //corner case
    if(len < 4) return 0;
    
    //points map
    for(let point of points){
        const [x , y ] = point;
        pointsMap[40000*x + y] = true;
    }
    
    for(let pointOne of points){
        const [x1 , y1] = pointOne;
        for(let pointTwo of points){
            if(pointTwo != pointOne){
                const [x2 , y2] = pointTwo;
                for(let pointThree of points){
                    if(pointThree != pointTwo){
                        const [x3 , y3] = pointThree;
                        //prove it's triangle
                        let triangleVal = (y2-y1)*(y3-y1) + (x2-x1)*(x3-x1)
                        if(triangleVal === 0){
                            let y4 = y2 + y3 - y1;
                            let x4 = x2 + x3 - x1;
                            if(pointsMap[40000*x4 + y4]){
                                let curArea = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1)) * Math.sqrt((x3-x1)*(x3-x1) + (y3-y1)*(y3-y1));
                                if(curArea !== 0) area = Math.min(area , curArea);
                            }
                        }
                        
                    }
                }
            }
        }
    }
    
    return area === Infinity ? 0 : area;
};