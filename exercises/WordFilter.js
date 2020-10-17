/*
Design a special dictionary which has some words and allows you to search the words in it by a prefix and a suffix.

Implement the WordFilter class:

WordFilter(string[] words) Initializes the object with the words in the dictionary.
f(string prefix, string suffix) Returns the index of the word in the dictionary which has the prefix prefix and the suffix suffix. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.
 

Example 1:

Input
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
Output
[null, 0]

Explanation
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = 'e".
 

Constraints:

1 <= words.length <= 15000
1 <= words[i].length <= 10
1 <= prefix.length, suffix.length <= 10
words[i], prefix and suffix consist of lower-case English letters only.
At most 15000 calls will be made to the function f.
*/
var WordFilter = function(words) {
    this.dic = {};
    for(let w=0; w<words.length; w++){
        let len = words[w].length;
        let ps = [''].concat(words[w].split(''));
        let ss = words[w].split('').concat(['']).reverse();
        let prefix = '';
        for(let i=0; i<=len; i++){
            prefix = prefix+ps[i];
            let suffix = '';
            for(let j=0; j<=len; j++){
                suffix = ss[j]+suffix; 
                this.dic[prefix +'#'+suffix] = w;
            }
        }
    }
};

WordFilter.prototype.f = function(prefix, suffix) {
    let key = prefix+'#'+suffix;
    if(this.dic[key]!==undefined) return this.dic[key];
    return -1;
};