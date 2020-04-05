/*
Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

Example:

Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output: 
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
*/
var groupStrings = function(strings) {
    var r = [];
var m = {};
var charMap = {
	"a": 1,
	"b": 2,
	"c": 3,
	"d": 4,
	"e": 5,
	"f": 6,
	"g": 7,
	"h": 8,
	"i": 9,
	"j": 10,
	"k": 11,
	"l": 12,
	"m": 13,
	"n": 14,
	"o": 15,
	"p": 16,
	"q": 17,
	"r": 18,
	"s": 19,
	"t": 20,
	"u": 21,
	"v": 22,
	"w": 23,
	"x": 24,
	"y": 25,
	"z": 26
};
var k;
for (var i = 0; i < strings.length; i++) {
	k = "";
	var s = strings[i];
	var offset = charMap[s[0]] - charMap.a;
	for (var j = 0; j < s.length; j++) {
		var t = charMap[s[j]] - offset;
		k += t - charMap.a < 0 ? t + 26 : t;
		k += ",";
	}
	if(m[k] === undefined) m[k] = [];
	m[k].push(s);
}
for (var prop in m) {
	m[prop].sort();
	r.push(m[prop]);
}
return r;
};