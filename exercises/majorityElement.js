/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
*/
function majorityElement(nums) {
    const length = nums.length;
    const candidates = getCandidates(nums, length);
    return validateCanditate(nums, candidates, length);
};

function getCandidates(nums, length) {
    let c1 = -1;
    let c2 = -1;
    let count1 = 0;
    let count2 = 0;
    
    for(let i = 0; i < length; i++) {
        if(nums[i] === c1){
            count1++;
        }else if(nums[i] === c2) {
            count2++;
        }else if(count1 === 0) {
            c1 =nums[i];
            count1++;
        }else if(count2 === 0) {
            c2 =nums[i];
            count2++;
        }else{
            count1--;
            count2--;
        }
    }
    return [c1,c2];
}

function validateCanditate(nums, candidates, length) {
    const amounts = [0,0];
    const final = [];

    for(let i = 0; i < length; i++) { 
        for(let j = 0; j < 2; j++) {
            if(nums[i] === candidates[j]) {
                amounts[j]++
            }
        }
    }    
    for(let i = 0; i< 2; i++){
        if(amounts[i] > Math.floor(length/3)){
           final.push(candidates[i]);
        }    
    }

    return final;
}