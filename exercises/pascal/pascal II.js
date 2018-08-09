/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?

*/
var getRow = function(rowIndex) {
    var result = [];
    
    if(rowIndex < 0){
        return result;
    }
    
    for(var i = 0; i <= rowIndex; i++){
        var cur = [];
        var pre = i > 0 ? result[i - 1] : [];
        
        for(var j = 0; j <= i; j++){
            if(j === 0){
                cur.push(1);    
            } else if(j === i){
                cur.push(1);
            } else {
                cur.push(pre[j] + pre[j-1]);
            }
        }
        
        result.push(cur);
    }
    
    return result[rowIndex];
};