/*
Given an array of n distinct non-empty strings, you need to generate minimal possible abbreviations for every word following rules below.

Begin with the first character and then the number of characters abbreviated, which followed by the last character.
If there are any conflict, that is more than one words share the same abbreviation, a longer prefix is used instead of only the first character until making the map from word to abbreviation become unique. In other words, a final abbreviation cannot map to more than one original words.
If the abbreviation doesn't make the word shorter, then keep it as original.
Example:
Input: ["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"]
Output: ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]
Note:
Both n and the length of each word will not exceed 400.
The length of each word is greater than 1.
The words consist of lowercase English letters only.
The return answers should be in the same order as the original array.
*/
var wordsAbbreviation = function(dict) {
    const makeAbbr = (s,k) => {
        if (k>=s.length-2) return s;
        return `${s.substring(0,k)}${s.length-1-k}${s[s.length-1]}`
    }

    const length = dict.length;
    let ans = [];
    let prefix = [];
    for (let i=0; i<length; i++){
        prefix[i]=1;
        ans[i]=makeAbbr(dict[i],1)
    }

    for (let i=0; i<length; i++){
        while (true){
            let hashSet = new Set();
            for (let j=i+1;j<length;j++) {
                if (ans[j] === ans[i]) hashSet.add(j);
            }
            if (hashSet.size === 0) break;
            
            hashSet.add(i);
            for (let k of hashSet) {
                prefix[k]++;
                ans[k]=makeAbbr(dict[k], prefix[k]);
            }
        }
    }
    return ans;
}