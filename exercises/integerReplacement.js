/*
Given a positive integer n and you can do operations as follow:

If n is even, replace n with n/2.
If n is odd, you can replace n with either n + 1 or n - 1.
What is the minimum number of replacements needed for n to become 1?

Example 1:

Input:
8

Output:
3

Explanation:
8 -> 4 -> 2 -> 1
Example 2:

Input:
7

Output:
4

Explanation:
7 -> 8 -> 4 -> 2 -> 1
or
7 -> 6 -> 3 -> 2 -> 1
*/
let memo=new Map();
var integerReplacement = function(n) {  
    let copy=n;
    if(memo.has(n))
        return memo.get(n);
    let step=0;
    while(n>0&&n%2===0){
        n=n/2;
        step++;
    }
       // 8-4-2-1 
    if(n===1){
        memo.set(copy, step);    
        return step;
    }
        
    memo.set(copy, step+1+Math.min(integerReplacement(n-1),integerReplacement(n+1)) );
    return memo.get(copy);
};