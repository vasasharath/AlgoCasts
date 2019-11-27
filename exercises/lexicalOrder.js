/*
Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.
*/
var lexicalOrder = function(n) {
    
    if(n < 1){
        return [];
    }
    
    let hash = {};
    let arr = [];
    
    for(let i = 1; i < 10; i++){
        if(i <= n){
            arr.push(i);
            util(i);
        }
    }
    
    return arr;
    
    function util(p){
        for(let i = 0; i < 10; i++){
            let curr = p * 10 + i;

            if(curr > n){
                return;
            }
            else {
                arr.push(curr);
            }
            
            util(curr);
        }
    }
    
};