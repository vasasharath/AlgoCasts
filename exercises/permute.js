/*
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
var permute = function(nums) {
    if(!nums){
		return [];
	}
		
	var helper = function(inputArray){
		if(inputArray.length === 1){
		    return [inputArray];
		};
		var permutationArray  = [];
		var lastNum = inputArray.pop();
        
		var permutations = helper(inputArray);
		var numPermutations = permutations.length;
        
	        var permutationLength = permutations[0].length;
		for(var i = 0; i <numPermutations; i++){
			var permutation = permutations[i];
			for(var j = 0; j <=permutationLength;j++){
                            var beginningOfArray = permutation.slice(0,j);
                            var endOfArray = permutation.slice(j);
                            beginningOfArray.push(lastNum);
                            var permutationToAdd = beginningOfArray.concat(endOfArray);
			    permutationArray.push(permutationToAdd);
			}
		}

		return permutationArray;
	};

	return helper(nums);
};