/*
In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell you how many other rabbits have the same color as them. Those answers are placed in an array.

Return the minimum number of rabbits that could be in the forest.

Examples:
Input: answers = [1, 1, 2]
Output: 5
Explanation:
The two rabbits that answered "1" could both be the same color, say red.
The rabbit than answered "2" can't be red or the answers would be inconsistent.
Say the rabbit that answered "2" was blue.
Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

Input: answers = [10, 10, 10]
Output: 11

Input: answers = []
Output: 0
Note:

answers will have length at most 1000.
Each answers[i] will be an integer in the range [0, 999].
*/
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    
    if (answers.length === 0 || answers.null) { 
        return 0
    } 
    
    else { 
        
        let minUniqueRabbits = {}; 
        let minNumberOfRabbits = 0;
        
        for (let i = 0; i < answers.length; i++)  { 
            
            if (answers[i] === 0) { 
                minNumberOfRabbits += 1
            }
            else if (!minUniqueRabbits[answers[i]]) { // for each answer given, if that number of rabbits +1 gave the same answer, there can be that number of rabbits + 1 of that color
                minUniqueRabbits[answers[i]] = answers[i]
                minNumberOfRabbits += answers[i] + 1
            } 
            else if (minUniqueRabbits[answers[i]] < (answers[i] * answers[i] + 1)) {  
                minUniqueRabbits[answers[i]] += answers[i]
            } 
            else { // if, for a given answer, more than that number of rabbits +1 gave that answer, then there must be another color with the same number of rabbits of that color
                minUniqueRabbits[answers[i]] = answers[i] 
                minNumberOfRabbits += answers[i] + 1
            }
        }
        return minNumberOfRabbits
    } 
};