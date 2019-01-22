/*
Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, 
find the smallest element in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

Examples:
Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "d"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "g"
Output: "j"

Input:
letters = ["c", "f", "j"]
target = "j"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "k"
Output: "c"
Note:
letters has a length in range [2, 10000].
letters consists of lowercase letters, and contains at least 2 unique letters.
target is a lowercase letter.
*/
var nextGreatestLetter = function(letters, target) {
    if (letters[0] > target || target >= letters[letters.length - 1]) {
        return letters[0];
    } else if (letters.length <= 2) {
    //base case
        return letters[0] <= target ? letters[letters.length - 1] : letters[0];
    } else {
        //recursively cut the array in half
        var split = Math.ceil(letters.length / 2) - 1;
        if (letters[split] > target) {
            letters.splice(split + 1, letters.length - split);
        } else {
            letters.splice(0, letters.length - split - 1);
        }
        return nextGreatestLetter(letters, target);
    }
};