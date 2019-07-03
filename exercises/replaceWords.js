/*
In English, we have a concept called root, which can be followed by some other words to 
form another longer word - let's call this word successor. For example, the root an, followed by other, 
which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. 
You need to replace all the successor in the sentence with the root forming it. 
If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

Example 1:

Input: dict = ["cat", "bat", "rat"]
sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
 

Note:

The input will only have lower-case letters.
1 <= dict words number <= 1000
1 <= sentence words number <= 1000
1 <= root length <= 100
1 <= sentence words length <= 1000
*/
class SpecialTrie {
    constructor() {
        this.root = {}
    }
    
    insert(word) {
        let node = this.root
        for (let i = 0; i < word.length; i++) {
            node = node[word[i]] = node[word[i]] || {}
            if (i === word.length - 1) node.isTerminal = true
        }
    }
    
    getShortestPrefix(word) {
        let prefix = ''
        let node = this.root
        for (const c of word) {
            if (!node[c]) return ''
            prefix += c
            node = node[c]
            if (node.isTerminal) return prefix
        }
    }
}

const replaceWords = (dict, sentence) => {
    const trie = new SpecialTrie()
    for (const word of dict) {
        trie.insert(word)
    }
    return sentence.split(' ').map(word => trie.getShortestPrefix(word) || word).join(' ')
}