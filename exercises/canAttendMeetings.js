/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true
*/
var canAttendMeetings = function(intervals) {
    if (!intervals || !intervals.length) {
        return true;
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (let i = 1, len = intervals.length; i < len; i++) {
        if (intervals[i][0] < intervals[i-1][1]) {
            return false;
        }
    }
    
    return true;
};