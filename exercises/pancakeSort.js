/*
Given an array A, we can perform a pancake flip: We choose some positive integer k <= A.length, 
then reverse the order of the first k elements of A.  We want to perform zero or more pancake flips 
(doing them one after another in succession) to sort the array A.

Return the k-values corresponding to a sequence of pancake flips that sort A.  
Any valid answer that sorts the array within 10 * A.length flips will be judged as correct.

 

Example 1:

Input: [3,2,4,1]
Output: [4,2,4,3]
Explanation: 
We perform 4 pancake flips, with k values 4, 2, 4, and 3.
Starting state: A = [3, 2, 4, 1]
After 1st flip (k=4): A = [1, 4, 2, 3]
After 2nd flip (k=2): A = [4, 1, 2, 3]
After 3rd flip (k=4): A = [3, 2, 1, 4]
After 4th flip (k=3): A = [1, 2, 3, 4], which is sorted. 
Example 2:

Input: [1,2,3]
Output: []
Explanation: The input is already sorted, so there is no need to flip anything.
Note that other answers, such as [3, 3], would also be accepted.
*/
var pancakeSort = function(A) {
    let B = [],
        res = [];
    
    for(let i = 0; i < A.length; ++i) {
        B.push(i + 1);
    }
    //the solution is equal to the steps from [1,2,3,...] into the input array
    for(let i = 0; i < A.length; ++i) {
        if(A[i] != B[i]) {
            let index = B.indexOf(A[i]);
            res.push(index + 1);
            if(i) {
                res.push(index - i + 1);
                res.push(index + 1);
                B = [...B.slice(0,i).reverse(), A[i], ...B.slice(i + 1, index).reverse(), B[i], ...B.slice(index + 1)];
            } else {
                B = [...B.slice(0, index + 1).reverse(), ... B.slice(index + 1)];
            }
     
        }
    }
    return res.reverse();    
};