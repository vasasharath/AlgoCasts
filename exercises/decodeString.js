/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. 
Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
*/
var decodeString = function(input, low = 0, high = input.length - 1)  {
    let repeat = 1;
    let open = 0;
    let bracketStart;
    let decoded = '';
    
    while (low <= high) {
        if (input[low] === '[') {
            if (open === 0) {
                bracketStart = low;
            }
            open += 1;
            low += 1;
        } else if (input[low] === ']') {
            open -= 1;
            if (open === 0) { // Rec.
                const repeatText = decodeString(input, bracketStart + 1, low);
                decoded += repeatText.repeat(repeat);
            }
            low += 1;
        } else if (open > 0) {
            // Ignore character (part of recursive fun)
            low += 1;
        } else if (!isNaN(input[low])) {
            repeat = 0;
            while (!isNaN(input[low])) {
                repeat *= 10;
                repeat += Number(input[low]);
                low += 1;
            }
        } else {
            decoded += input[low];
            low += 1;
        }
    }
    
    return decoded;
};