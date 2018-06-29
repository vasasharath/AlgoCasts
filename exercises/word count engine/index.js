/*
Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

Examples:

input:  document = "Practice makes perfect. you'll only
                    get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"], 
          ["get", "1"], ["by", "1"], ["just", "1"] ]
Important: please convert the occurrence integers in the output list to strings (e.g. "3" instead of 3). We ask this because in compiled languages such as C#, Java, C++, C etc., it’s not straightforward to create mixed-type arrays (as it is, for instance, in scripted languages like JavaScript, Python, Ruby etc.). The expected output will simply be an array of string arrays.

Constraints:

[time limit] 5000ms
[input] string document
[output] array.array.string
*/

function wordCountEngine(document) {
 let docArr = document.toLowerCase().replace(/[^a-z ]/g, '')
    .split(' ');

  let len = docArr.length;
  let i;
  let val;
  let map = {}; // the occurrence of words
  for (i = 0; i < len; i++) {
    let val = docArr[i];
    if (map[val] === undefined) {
      map[val] = 1;
    } else {
      map[val] = map[val] + 1;
    }
  }
  // console.log(map);

  let key;
  let rtnArray = [];
  // the max occurrence is the length of words' array
  for (i = len - 1; i > -1; i--) {
    for (key in map) {
      if (map.hasOwnProperty(key)) {
        val = map[key];
        if (val === i && key.length > 0 ) {
          rtnArray.push([key, i.toString()]);
          delete map.key;
        }
      }
    }
  }
  return rtnArray;
}