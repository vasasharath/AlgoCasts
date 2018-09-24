/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

var canConstruct = function(ransomNote, magazine) {
    var map = {};
    var flag = true;

    magazine.split('').forEach(i => map[i] === undefined ? map[i] = 1 : map[i]++);
    ransomNote.split('').forEach(i => {
        if(map[i] === undefined || map[i] === 0) {
            flag = false;
        } else {
            map[i]--;
        }
    });

    return flag;
};