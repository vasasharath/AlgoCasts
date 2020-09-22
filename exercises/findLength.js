/*
Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:

Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
 

Note:

1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
*/
var findLength = function(A, B) {
    let l1=A.length, l2=B.length, max=0;
    for(let offset=-l2+1; offset<l1; offset++){
    	let l=0;
    	for(let i=Math.max(0,offset); i<l1 && i-offset<l2; i++){
    		if(A[i]===B[i-offset]){
    			l++;
    			max = Math.max(max, l);
    		}
    		else l=0;
    	}
    }
    return max;
};