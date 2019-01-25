/*
Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. 
Such a word is said to complete the given string licensePlate

Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.

It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

The license plate might have the same letter occurring multiple times. 
For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.

Example 1:
Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
Output: "steps"
Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
Note that the answer is not "step", because the letter "s" must occur in the word twice.
Also note that we ignored case for the purposes of comparing whether a letter exists in the word.
Example 2:
Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
Output: "pest"
Explanation: There are 3 smallest length words that contains the letters "s".
We return the one that occurred first.
Note:
licensePlate will be a string with length in range [1, 7].
licensePlate will contain digits, spaces, or letters (uppercase or lowercase).
words will have a length in the range [10, 1000].
Every words[i] will consist of lowercase letters, and have length in range [1, 15].
*/
var shortestCompletingWord = function(licensePlate, words) {
     licensePlate = licensePlate.toLowerCase();
    let dict = {};
    
    for (var i = 0; i<licensePlate.length; i++){
        if (licensePlate[i].match(/[a-z]/i)) {
            if (licensePlate[i] in dict){
                dict[licensePlate[i]] += 1;
            } else{
                dict[licensePlate[i]] = 1;
            }
        }
    }
    
    let lock = true;
    let ans = "";
    let minLength = 30;
    for (i in words){
        if (words[i].length<minLength){
            lock = true;
            for (el in dict){
                let regex = new RegExp(el, "g");
                if ((words[i].match(regex)||[]).length < dict[el]){
                    lock = false;
                }
            }
            if (lock == true) {
                minLength  = words[i].length;
                ans = words[i];
            }
        }
    }
    
    return ans;
};