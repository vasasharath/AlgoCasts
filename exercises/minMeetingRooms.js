/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/
var minMeetingRooms = function(intervals) {
    var start=[];
    var end=[];
    for(var i=0; i<intervals.length; i++){
        start.push(intervals[i][0]);
        end.push(intervals[i][1]);
    }
    start=start.sort(function(a,b){
        return a-b
    })
     end=end.sort(function(c,d){
        return c-d
    })
    var endIndex=0;
    var room=0;
    for(var j=0; j<start.length; j++){
        if(start[j]< end[endIndex]){
            room++;
        }else{
            endIndex++;
        }
    }
    return room;
};