/*

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/
var merge = function(intervals) {
     if (intervals.length === 0) return [];
    
    intervals.sort((a,b)=> a[0] > b[0] ? 1 : -1);
    
    let stack = [];
    
    intervals.forEach(i => {
        let first = Math.min(i[0],i[1]);
        let second = Math.max(i[0],i[1]);
        
        if (stack.length===0){
            stack.push(first);
            stack.push(second);    
        }
        else{
            let lastInStack = stack[stack.length-1];
            if (lastInStack < first) {
                stack.push(first);
                stack.push(second);
            }
            else if (lastInStack >= first && lastInStack <= second ) {
                stack.pop();
                stack.push(second);
            }
        }
    })
    
    let result = []
    for (let i=1; i< stack.length; i+=2){
        result.push(stack.slice(i-1,i+1));
    }
    return result;
};