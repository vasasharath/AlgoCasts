/*
Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list. Your method will be called repeatedly many times with different parameters. 

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
*/
class WordDistance {

    constructor(words){
        this.words = words;
        this.position = {};

        for (let i = 0; i < words.length; i++) {
            let w = words[i];
            if (this.position[w] === undefined){
                this.position[w] = [i];
            }
            else{
                this.position[w].push(i);
            }
        }
    }

    shortest(word1, word2){

        if (word1 === word2){
            return 0;
        }

        if (word2 && word1){
            let w1Positions = this.position[word1];
            let w2Positions = this.position[word2];
            let minDistance = Infinity;

            let i = 0;
            let j = 0;

            while (i < w1Positions.length && j < w2Positions.length){
                 let p1 = w1Positions[i];
                 let p2 = w2Positions[j];

                 minDistance = Math.min(minDistance, Math.abs(p2-p1));

                 if (p1 < p2){
                     i++;
                 }
                 else{
                     j++;
                 }

            }

            return minDistance;
        }

        return null;

    }

}