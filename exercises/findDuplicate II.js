/*
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), 
prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/
var findDuplicate = function(nums) {
     var len = nums.length, n = len - 1;
    var bits = 0;
    while(n >> bits)
        bits++;
    var map = new Array(bits), m = new Array(bits);
    for(var i=0;i<bits;i++){
        map[i] = m[i] = 0;
    }
    for(var i=1;i<=n;i++){
        var k = i, j = 0;
        while(k){
            map[j++] += 1 & k;
            k >>= 1;
        }
    }
    nums.forEach(function(n){
        var j = 0;
        while(n){
            m[j++] += 1 & n;
            n >>= 1;
        }
    });
    var ret = 0;
    for(var i=0;i<bits;i++){
        ret |= (+(m[i] > map[i]) << i);
    }
    return ret;
};