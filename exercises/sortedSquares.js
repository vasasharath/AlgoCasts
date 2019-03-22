/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
*/
var sortedSquares = function(A) {
     if(A.length === 1){
        A[0] = A[0] * A[0];
        return A;
    }
    let star = 0;
    let end = A.length -1;
    let m = Math.floor(end - star / 2);
    while(true){
        if(A[0] >=0){m =0; break}
        if(A[A.length-1]<=0){m=A.length-1;break}
        if(A[m] >= 0 && A[m-1]<=0){
            break
        };
        if(A[m] >=0){
            end = m-1;
            m= Math.floor(end - star / 2);
                    }
        else{
            star = m+1;
            m= Math.floor(end - star / 2);
        }
    }    
    let l2 = m-1;
    let r2 = m;
    let cl2 = A[l2] * A[l2] ;
    let cr2 = A[r2] * A[r2] ;
    const subArray = [];
    while(true){
        if(cl2 < cr2){
            subArray.push(cl2);
            l2 = l2 - 1;
            if(l2 < 0){
                break;                
            }  
            cl2 = A[l2] * A[l2];
            
        } else{
            subArray.push(cr2);
            r2=r2+1;
            if(r2 === A.length){
             break;                
            }
            cr2 = A[r2] * A[r2] ;
        }
    }
    if(l2 > -1){
        for(l2; l2 >= 0; l2-- ){
            subArray.push(A[l2] * A[l2])
        }
    }
    if(r2 < A.length){
        for(r2; r2 < A.length; r2++){
            subArray.push(A[r2] * A[r2])
        }
    }
    return subArray
};