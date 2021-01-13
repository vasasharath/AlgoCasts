/*
A sequence X1, X2, ..., Xn is Fibonacci-like if:

n >= 3
Xi + Xi+1 = Xi+2 for all i + 2 <= n
Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.

A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

 

Example 1:

Input: arr = [1,2,3,4,5,6,7,8]
Output: 5
Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].
Example 2:

Input: arr = [1,3,7,11,12,14,18]
Output: 3
Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].
 

Constraints:

3 <= arr.length <= 1000
1 <= arr[i] < arr[i + 1] <= 109
*/
var lenLongestFibSubseq = function(A) {
    var map= new Map(), len=A.length,count=0, max=0;
    A.forEach(s => {
        map.set(s,1);
    })
    for(let i=0; i<len-1; i++){
        for(let j=i+1; j<len; j++){
            let sum=A[i]+A[j];
            let pre=A[j];
            let present= map.get(sum);
            if(present){
              count+=2;
            }
            while(present){
                count++;
                const cur=sum;
                sum+=pre
                pre=cur;
                present=map.get(sum);
            }
            max= Math.max(max, count);
            count=0;
        }
    }
    return max;
};