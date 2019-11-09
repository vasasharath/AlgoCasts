/*
Given a nested list of integers, implement an iterator to flatten it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Example 1:

Input: [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,1,2,1,1].
Example 2:

Input: [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,4,6].
*/
const flatten = function(nestedList, res = []) {
    if (!nestedList.length) {
        return res;
    }
    
    while(nestedList.length) {
        let list = nestedList.shift();
        if (list.isInteger()) {
            res.push(list.getInteger());
        } else {
            flatten(list.getList(), res);
        }
    }
    return res;
}
var NestedIterator = function(nestedList) {
  this.queue = flatten(nestedList);  
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.queue.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.queue.shift();
};