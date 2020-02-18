/*
Implement a MapSum class with insert, and sum methods.

For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.

For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

Example 1:
Input: insert("apple", 3), Output: Null
Input: sum("ap"), Output: 3
Input: insert("app", 2), Output: Null
Input: sum("ap"), Output: 5
*/
var MapSum = function(value='') {
    this.value = value;
    this.count = 0;
    this.isWord = false;
};

MapSum.prototype.insert = function(key, val) {
    let cur = this, replace = this.search(key);
    if(replace===false){
    	this.count+=val;
    	for(let i=0, len=key.length; i<len; i++){
	    	if(!cur[key[i]]) cur[key[i]] = new MapSum(cur.value+key[i]);
	    	cur[key[i]].count+=val;
	    	cur = cur[key[i]];
	    }
	    cur.isWord = true;
	}
    else{
    	this.count = this.count+val-replace;
    	for(let i=0, len=key.length; i<len; i++){
	    	if(!cur[key[i]]) cur[key[i]] = new MapSum(cur.value+key[i]);
	    	cur[key[i]].count = cur[key[i]].count-replace+val;
	    	cur = cur[key[i]];
	    }
	}
};

MapSum.prototype.sum = function(prefix) {
    let cur = this;
    for(let i=0, len=prefix.length; i<len; i++){
    	if(!cur[prefix[i]]) return 0;
    	cur = cur[prefix[i]];
    }
    return cur.count;
};

MapSum.prototype.search = function(key) {
    let cur = this;
    for(let i=0, len=key.length; i<len; i++){
    	if(!cur[key[i]]) return false;
    	cur = cur[key[i]];
    }
    if(cur.isWord) return cur.count;
    else return false;
};