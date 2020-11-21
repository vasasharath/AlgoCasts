/*
In the following, every capital letter represents some hexadecimal digit from 0 to f.

The red-green-blue color "#AABBCC" can be written as "#ABC" in shorthand.  For example, "#15c" is shorthand for the color "#1155cc".

Now, say the similarity between two colors "#ABCDEF" and "#UVWXYZ" is -(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2.

Given the color "#ABCDEF", return a 7 character color that is most similar to #ABCDEF, and has a shorthand (that is, it can be represented as some "#XYZ"

Example 1:
Input: color = "#09f166"
Output: "#11ee66"
Explanation:  
The similarity is -(0x09 - 0x11)^2 -(0xf1 - 0xee)^2 - (0x66 - 0x66)^2 = -64 -9 -0 = -73.
This is the highest among any shorthand color.
Note:

color is a string of length 7.
color is a valid RGB color: for i > 0, color[i] is a hexadecimal digit from 0 to f
Any answer which has the same (highest) similarity as the best answer will be accepted.
All inputs and outputs should use lowercase letters, and the output is 7 characters.
*/
var similarRGB = function(color) {
    let result = '#';
    for (let i = 1; i < color.length; i += 2) {
        const a = parseInt(color[i] + color[i], 16);
        const b = a + 17;
        const c = a - 17;
        const base = parseInt(color[i] + color[i + 1], 16);
        const diff1 = Math.abs(a - base);
        const diff2 = Math.abs(b - base);
        const diff3 = Math.abs(c - base);
        let best = a;
        switch(Math.min(diff1, diff2, diff3)) {
        case diff2:
            best = b;
            break;
        case diff3: 
            best = c;
            break;
        }
        result += best !== 0 ? best.toString(16) : '00';
    }
    return result;
};