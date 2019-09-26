/*
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". 
When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]
*/
var findRepeatedDnaSequences = function(s) {
    var seen={};
    var set=new Set();
    for(var i=0; i<s.length-9; i++){
        var curTen=s.slice(i, i+10);
        if(seen[curTen] == undefined){
            seen[curTen]=1;
        }else{
            set.add(curTen);
        }
    }
    return Array.from(set);
};