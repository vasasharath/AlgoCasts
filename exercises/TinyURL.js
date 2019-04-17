/*
Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl 
and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. 
You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
*/
const maxChars = 6;
let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let urlMap = new Map();
let codeMap = new Map();

var encode = function(longUrl) {
if (urlMap.has(longUrl)) return urlMap.get(longUrl);

let code = [...Array(maxChars)]
.map(_ => Math.floor(Math.random() * charSet.length))
.map(i => charSet[i])
.join("");

urlMap.set(longUrl, code);
codeMap.set(code, longUrl);

return "http://tinyurl.com/" + code;
};

var decode = function(shortUrl) {
let code = shortUrl.substr(-maxChars);

if (!codeMap.has(code))
throw new Error("The given code(${code}) is not existed!");

return codeMap.get(code);
};