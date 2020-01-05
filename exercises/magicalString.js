/*
A magical string S consists of only '1' and '2' and obeys the following rules:

The string S is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string S itself.

The first few elements of string S is the following: S = "1221121221221121122……"

If we group the consecutive '1's and '2's in S, it will be:

1 22 11 2 1 22 1 22 11 2 11 22 ......

and the occurrences of '1's or '2's in each group are:

1 2 2 1 1 2 1 2 2 1 2 2 ......

You can see that the occurrence sequence above is the S itself.

Given an integer N as input, return the number of '1's in the first N number in the magical string S.

Note: N will not exceed 100,000.

Example 1:
Input: 6
Output: 3
Explanation: The first 6 elements of magical string S is "12211" and it contains three 1's, so return 3.
*/
var magicalString = function(n) { 
let magic = ['1', '22'];
    let occurrences = [1, 2, 2];
    let i = 0;
    
    /*
     * the idea is to produce the next magic substring and keep the magic groups and
     * occurrences array in sync by assigning next magic substring in group based on 
     * matching occurrences and adding occurrences based on the magic substring.
     */
    while (occurrences.length < n) {
        if (!magic[i]) {
            if (i % 2 === 0 && occurrences[i] === 1) magic[i] = '1';
            else if (i % 2 === 0 && occurrences[i] === 2) magic[i] = '11';
            else if (i % 2 === 1 && occurrences[i] === 1) magic[i] = '2';
            else if (i % 2 === 1 && occurrences[i] === 2) magic[i] = '22';
            
            for (let j = 0; j < magic[i].length; j++)
                occurrences.push(+magic[i].charAt(j));
        } 
        
        i++;
    }
    
    /*
     * since the occurrences array contains a substring of the magic string, we can
     * count how many ones in the array
     */
    return occurrences.reduce((count, num, i) => i < n && num === 1 ? ++count : count, 0);
};