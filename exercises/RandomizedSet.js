/*
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
*/
var RandomizedSet = function() {
    this.map1 = new Map();
    this.map2 = new Map();
    this.count = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map1.has(val)) return false;
    this.map1.set(val, this.count);
    this.map2.set(this.count, val);
    this.count++;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map1.has(val)) return false;
    if(this.map1.get(val)===this.count-1) {
        this.map1.delete(val);
        this.map2.delete(this.count-1);
    }else {
        let lastVal = this.map2.get(this.count-1);
        let preIndex = this.map1.get(val);
        this.map2.set(preIndex, lastVal);
        this.map2.delete(this.count-1);
        this.map1.set(lastVal, preIndex);
        this.map1.delete(val);
    }
    this.count--;
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.map2.get(random(this.count));
    function random(l) {
        return Math.floor((Math.random() * l));
    }
};
