/*
Given a positive 32-bit integer n, 
you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n 
and is greater in value than n. If no such positive 32-bit integer exists, you need to return -1.

Example 1:

Input: 12
Output: 21
 

Example 2:

Input: 21
Output: -1
*/
var nextGreaterElement = function(n) {
    const MAX_INT = Math.pow(2,31);
    let arr = new String(n).split("");
    
    const findNextSmallest = (index) => {
        let current = index;
        for (let i = arr.length; i  > index; i--){
            if (arr[i] > arr[index] ){
                if (current === index || arr[i] < arr[current]){
                   current = i; 
                }
            }
        }
        
        if (current === index){
            return -1;
        }
        return current;
    };
    
    for (let i = arr.length; i >= 0; i--){
        let smallerIndex = findNextSmallest(i);
        if (smallerIndex !== -1){
            let temp = arr[smallerIndex];
            arr[smallerIndex] = arr[i];
            arr[i] = temp;
            
            let backHalf = arr.slice(i+1).sort();
            arr = arr.splice(0,i+1);  
            arr = arr.concat(backHalf);
            let r = parseInt(arr.join(""),10)
            if (r > MAX_INT){
                return -1;
            }
            return r;
        }
    }
    return -1;
};