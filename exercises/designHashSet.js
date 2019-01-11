/*
Design a HashSet without using any built-in hash table libraries.

To be specific, your design should include these functions:

add(value): Insert a value into the HashSet. 
contains(value) : Return whether the value exists in the HashSet or not.
remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.

Example:

MyHashSet hashSet = new MyHashSet();
hashSet.add(1);         
hashSet.add(2);         
hashSet.contains(1);    // returns true
hashSet.contains(3);    // returns false (not found)
hashSet.add(2);          
hashSet.contains(2);    // returns true
hashSet.remove(2);          
hashSet.contains(2);    // returns false (already removed)

Note:

All values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashSet library.
*/
var MyHashSet = function() {
    this.mySet = Array.from({length:1000}, x=>[]);
    this.mapFn = function(num){
    	return num%1000;
    }
};

MyHashSet.prototype.add = function(key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue], index = arr.indexOf(key);
    if(index===-1) arr.push(key);
};

MyHashSet.prototype.remove = function(key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue], index = arr.indexOf(key);
    if(index!==-1) arr.splice(index, 1);
};

MyHashSet.prototype.contains = function(key) {
    let mapValue = this.mapFn(key);
    let arr = this.mySet[mapValue], index = arr.indexOf(key);
    return index!==-1;
};