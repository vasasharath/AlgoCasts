/*
Given a picture consisting of black and white pixels, find the number of black lonely pixels.

The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.

A black lonely pixel is character 'B' that located at a specific position where the same row and same column don't have any other black pixels.

Example:
Input: 
[['W', 'W', 'B'],
 ['W', 'B', 'W'],
 ['B', 'W', 'W']]

Output: 3
Explanation: All the three 'B's are black lonely pixels.
Note:
The range of width and height of the input 2D array is [1,500].
*/
var findLonelyPixel = function(picture) {
    var output = 0;
    
// err handling
    if (!picture) {
        return output;
    };
    
    var row = {}, col = {};

// generate two hashmaps for every row and column
    for (var i = 0; i < picture.length; i++) {
        for (var j = 0; j < picture[0].length; j++) {
            if (picture[i][j] === "B") {
                row[i] = row.hasOwnProperty(i) ? row[i] + 1 : 1;
                col[j] = col.hasOwnProperty(j) ? col[j] + 1 : 1;
            }
        }
    };

// check every pixel in the picture
    for (var i = 0; i < picture.length; i++) {
        for (var j = 0; j < picture[0].length; j++) {
            if (picture[i][j] === "B" && row[i] === 1 && col[j] === 1) {
                output++;
            }
        }
    };
    
    return output;
};