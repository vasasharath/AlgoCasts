/*
Given a collection of candidate numbers (candidates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/
var combinationSum2 = function(candidates, target) {
     if (!candidates || !candidates.length) { return []; }
    
    candidates.sort((a,b) => a - b);
    const solutions = [];
    
    const findCombos = function(candIdx, subtotal, solution) {
        for (let i = candIdx; i < candidates.length; i++) {
            if (subtotal + candidates[i] === target) { 
                solutions.push(solution.concat(candidates[i])); 
            } else if (subtotal + candidates[i] < target && i + 1 < candidates.length) { 
                findCombos(i + 1, subtotal + candidates[i], solution.concat(candidates[i])); 
            }
            while (candidates[i + 1] === candidates[i]) { i++; }
        };
    };

    findCombos(0, 0, []);
    return solutions;
};