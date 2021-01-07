/*
Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

 

Example 1:

Input: 1
Output: true
Example 2:

Input: 10
Output: false
Example 3:

Input: 16
Output: true
Example 4:

Input: 24
Output: false
Example 5:

Input: 46
Output: true
 

Note:

1 <= N <= 10^9
*/
let map=new Map();
var reorderedPowerOf2 = function(N) {
    if(map.size<=0){
     let pow=0;let res=Math.pow(2,pow);
        while(res<=1000000000){
            res=Math.pow(2,pow);
            let ar=map.get(res.toString().length)||new Array();
            ar.push(res);
            map.set(res.toString().length,ar);
            pow++;
        }
    }
    
    let ar=map.get(N.toString().length);
    N=N.toString().split('').sort((a,b)=>a-b).join('');
    for(let val of ar){
        if(val.toString().split('').sort((a,b)=>a-b).join('')==N)
            return true;
    }
    return false;
};