/*
Given a non-negative integer N, find the largest number that is less than or equal to N with monotone increasing digits.

(Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.)

Example 1:
Input: N = 10
Output: 9
Example 2:
Input: N = 1234
Output: 1234
Example 3:
Input: N = 332
Output: 299
Note: N is an integer in the range [0, 10^9].
*/
var monotoneIncreasingDigits = function(N) {

    let str=N.toString().split('');
    let ind=-1;
    for(let i=str.length-2;i>=0;i--){
        if(str[i]>str[i+1]){
            str[i]-=1;
            ind=i+1;
        }
    }
    if(ind!=-1)
        str=str.map((item,i)=>{
            if(i>=ind)
                return '9';
            return item;
        })
    return parseInt(str.join(''));
    
};