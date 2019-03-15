/*
Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, 
a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

 

Example 1:

Input: [1,2,3,4]
Output: "23:41"
Example 2:

Input: [5,5,5,5]
Output: ""
 

Note:

A.length == 4
0 <= A[i] <= 9
*/
var largestTimeFromDigits = function (A) {

    let allPossible = [];
    generate(A[0], A[1], A[2], A[3]);
    generate(A[0], A[2], A[1], A[3]);
    generate(A[0], A[3], A[2], A[1]);
    generate(A[3], A[2], A[0], A[1]);
    generate(A[3], A[1], A[2], A[0]);
    generate(A[2], A[1], A[0], A[3]);

    function generate(h1, h2, m1, m2) {
        allPossible.push([((h1 * 10) + h2), ((m1 * 10) + m2)]);
        allPossible.push([((h1 * 10) + h2), ((m2 * 10) + m1)]);
        allPossible.push([((h2 * 10) + h1), ((m1 * 10) + m2)]);
        allPossible.push([((h2 * 10) + h1), ((m2 * 10) + m1)]);
    }

    let best;
    allPossible.forEach(possibility => {
        // If legal
        if (possibility[0] < 24 && possibility[1] < 60) {
            if (best === undefined || ((possibility[0] > best[0]) || (possibility[0] === best[0] && possibility[1] > best[1]))) {
                best = possibility;
            }
        }
    })
    if (best === undefined) {
        return "";
    } else {
        let hour = best[0].toString();
        hour = hour.length === 1 ? "0" + hour : hour;
        let minute = best[1].toString();
        minute = minute.length === 1 ? "0" + minute : minute;
        
        return `${hour}:${minute}`;
    }
}