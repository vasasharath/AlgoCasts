/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/
var LRUCache = function(capacity) {
  this.capacity = capacity; 
  this.map = new Map(); //this stores the whole array

  //boundaries for double LL
  this.head = {}; 
  this.tail = {};
  this.head.next = this.tail; //initialize double LL
  this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.map.has(key)){
    //remove elem from current position
    let c = this.map.get(key);
    c.prev.next = c.next;
    c.next.prev = c.prev;

    
    this.tail.prev.next = c; //insert it after the last element (elem before tail) since we just used it
    c.prev = this.tail.prev; //update c.prev and next pointer
    c.next = this.tail;
    this.tail.prev = c; //update last element as tail
    return c.value;
  } else {
    return -1; //element does not exist
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.get(key) !== -1){ //key does not exist, update last element value 
    this.tail.prev.value = value; 
  } else {
    //need to check if map size is at capacity
    if(this.map.size === this.capacity) { 
      //delete item both from map and DLL
      this.map.delete(this.head.next.key); //delete first element of list
      this.head.next = this.head.next.next; //update first element as next element
      this.head.next.prev = this.head; 
    }

    let newNode = {
      value, 
      key
    }; //each node is a hashtable that stores key and value 
    
    
    //When adding a new node, we need to update both map and DLL
    this.map.set(key, newNode); //add current node to map 
    this.tail.prev.next = newNode; //add node to end of the list
    newNode.prev = this.tail.prev; //update prev and next pointers of newNode
    newNode.next = this.tail;
    this.tail.prev = newNode; //update last element
  }
};