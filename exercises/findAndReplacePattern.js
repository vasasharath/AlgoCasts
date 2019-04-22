/*
You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), 
we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, 
and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern. 

You may return the answer in any order.

 

Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
since a and b map to the same letter.
 

Note:

1 <= words.length <= 50
1 <= pattern.length = words[i].length <= 20
*/
   var findAndReplacePattern = function(words, pattern) {
    const res = [];
    const map_to_ptn = new Map();
    const map_to_word = new Map();
    
    _.each(words, (word) => {
        if (_.size(word) !== _.size(pattern)) {
            return;
        }
        
        map_to_ptn.clear();
        map_to_word.clear();

        for (let i = 0; i < _.size(word); i++) {
            const ptn_ch = pattern.charAt(i);
            const word_ch = word.charAt(i);
            if (map_to_ptn.has(word_ch) && map_to_ptn.get(word_ch) !== ptn_ch) {
                return;
            }
            
            if (map_to_word.has(ptn_ch) && map_to_word.get(ptn_ch) !== word_ch) {
                return;
            }
            
            map_to_ptn.set(word_ch, ptn_ch);
            map_to_word.set(ptn_ch, word_ch);
        }
        res.push(word);
    });
    return res;
};
