/*
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

*/
var arrayPairSum = function(nums) {
   let hash = [];
    for(let i=0; i<20001;++i){
        hash[i]=0;
    }
    let sum = 0;
    let min= Number.MAX_VALUE;
    let max= Number.MIN_VALUE;
    for(let i=0; i<nums.length;++i){
        let cur=nums[i]+10000;
        ++hash[cur];
        min=Math.min(min,cur);
        max=Math.max(max,cur);
    }
    let evenOdd=0;
    for(let i=min; i<=max;++i){
        let curAmount=hash[i];
           for(let j=0; j<curAmount;++j){
                if(evenOdd==0){
                    sum+=i-10000;
                }  
               evenOdd^=1;
           } 
    }
    return sum;
};