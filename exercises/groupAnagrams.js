/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/
var groupAnagrams = function(strs) {
     if(strs.length == 0) return [];
    const result = new Map();
    const primes = [2, 3, 5, 7, 11 ,13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 107];
    const getKey = str => {
        let key = 1;
        for(let i = 0; i < str.length; i++){
            key =  primes[str.charCodeAt(i) - 97] * key;
        }
        return key;
    }
    strs.forEach(w => {
        let key = getKey(w);
        if(result.has(key)) {
            result.get(key).push(w);
        } else {
            result.set(key,  [w]);
        }
       
    });
    return [...result.values()];
};