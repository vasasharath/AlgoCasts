/*
Given two sparse matrices A and B, return the result of AB.

You may assume that A's column number is equal to B's row number.

Example:

Input:

A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]

Output:

     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 |
*/
var multiply = function(A, B) {
    let Alen=A.length, ARowlen= A[0].length, BrowLen= B[0].length,result=[];
    for(let i=0; i<Alen; i++){
       let curSum= new Array(BrowLen).fill(0);
       for(let j=0; j<ARowlen; j++){
           if(A[i][j] != 0){
               for(let k=0; k<BrowLen; k++){
                 if(B[j][k] != 0) curSum[k]+= A[i][j]*B[j][k];
               }
           }
         }
       result.push(curSum); 
    }
    return result;
};                  