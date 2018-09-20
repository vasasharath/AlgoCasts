/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
*/
var reverseVowels = function(s) {
    let i =0 , j = s.length - 1,temp, sary = s.split('');
    while(i < j){
        if(!isVowel(s[i])){
            i++;
            continue;
        }
        if(!isVowel(s[j])){
            j--;
            continue;
        }
        temp = sary[i];
        sary[i] = sary[j];
        sary[j] = temp;
        
        i++;
        j--;
    }
    return sary.join('');
};
function isVowel(a){
    return (/^[aeiou]$/i).test(a);
    //return (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u');
}