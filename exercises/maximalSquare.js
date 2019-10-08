/*
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/
var maximalSquare = function(matrix) {
       const checkSquare = (upperLeft,size) => {
        const x = upperLeft[0];
        const y = upperLeft[1];
        
        for (let i=x; i<x+size; i++){
            for (let j=y; j<y+size; j++){
                if (matrix[i][j] === "0") return false;
            }
        }
        return true;
    }
    
    let globalMax = 0;
    
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (matrix[i][j]==="1"){
                let i_length = matrix.length;
                let j_length = matrix[i].length;
                let valid = true;
                let currentSize = 1;
                if (valid && currentSize > globalMax) globalMax = currentSize;
                while (valid){
                    currentSize++;
                    if (i+currentSize<=i_length && j+currentSize<=j_length){
                        valid = checkSquare([i,j],currentSize);
                        if (valid && currentSize > globalMax) globalMax = currentSize;
                    }else{
                        valid=false;
                    }
                } 
            }   
        }
    }
    return Math.pow(globalMax,2);
};