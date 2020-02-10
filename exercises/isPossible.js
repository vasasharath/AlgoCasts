/*
Given an array nums sorted in ascending order, return true if and only if you can split it into 1 or more subsequences such that 
each subsequence consists of consecutive integers and has length at least 3.

 

Example 1:

Input: [1,2,3,3,4,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3
3, 4, 5

Example 2:

Input: [1,2,3,3,4,4,5,5]
Output: True
Explanation:
You can split them into two consecutive subsequences : 
1, 2, 3, 4, 5
3, 4, 5

Example 3:

Input: [1,2,3,4,4,5]
Output: False
 

Constraints:

1 <= nums.length <= 10000
*/
var isPossible = function(nums) {
   let i=1;
    let ar=new Array();
    ar.push([nums[0]])
    while(i<nums.length){
        let j=i,k=-1;
        for(let m=0;m<ar.length;m++){
            let item=ar[m];
            if(item.length<3){
                if(item[item.length-1]==nums[i]-1){
                    item.push(nums[i++]);
                    break;    
                }
                else if(item[item.length-1]!==nums[i]) return false;
                
            }       
            else if(k==-1&&item[item.length-1]==nums[i]-1)
                k=m;
        }
        if(j==i){
            if(k==-1)
                ar.push([nums[i]]);
            else
                ar[k].push(nums[i]);
            i++;
        }
    }
    for(let item of ar){
        if(item.length<3)
            return false;
    }
    return true;
    
};