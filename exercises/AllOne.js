/*
Implement a data structure supporting the following operations:

Inc(Key) - Inserts a new key with value 1. Or increments an existing key by 1. Key is guaranteed to be a non-empty string.
Dec(Key) - If Key's value is 1, remove it from the data structure. Otherwise decrements an existing key by 1. If the key does not exist, this function does nothing. Key is guaranteed to be a non-empty string.
GetMaxKey() - Returns one of the keys with maximal value. If no element exists, return an empty string "".
GetMinKey() - Returns one of the keys with minimal value. If no element exists, return an empty string "".
Challenge: Perform all these in O(1) time complexity.
*/
class LinkNode {
  constructor(key, value = 1) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class AllOne {
  constructor() {
      this.map = new Map();
      // Head and tail default maximum (small) value
      this.dummyHead = new LinkNode('');
      this.dummyTail = new LinkNode('');
      this.dummyHead.next = this.dummyTail;
      this.dummyTail.prev = this.dummyHead;
  }
  /**
   * Insert node
   * @param {LinkNode} prevNode 
   * @param {LinkNode} node 
   * @param {LinkNode} nextNode 
   */
  insertNode(prevNode, node, nextNode) {
    prevNode.next = node;
    node.next = nextNode;
    nextNode.prev = node;
    node.prev = prevNode;
  }
  /**
   * Insert node
   * @param {LinkNode} prevNode 
   * @param {LinkNode} nextNode 
   */
  deleteNode(prevNode, nextNode) {
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
  /**
   * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
   * @param {string} key
   * @return {void}
   */
  inc(key) {
    const map = this.map, dummyHead = this.dummyHead;
    let node = map.get(key);
    if(node) {
      node.value++;
      const prevNode = node.prev, nextNode = node.next;
      let targetNode = node.next;
      while(targetNode !== this.dummyTail && targetNode.value <= node.value) {
        targetNode = targetNode.next;
      }
      // Need to adjust the position of the linked list at different times
      if(nextNode !== targetNode) {
        this.insertNode(targetNode.prev, node, targetNode);
        this.deleteNode(prevNode, nextNode);
      }
    } else {
      node = new LinkNode(key);
      // Insert into the head of the chain
      this.insertNode(dummyHead, node, dummyHead.next);
      map.set(key, node);
    }
  }
  /**
   * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
   * @param {string} key
   * @return {void}
   */
  dec(key) {
    const map = this.map;
    let node = map.get(key);
    if(node) {
      const prevNode = node.prev, nextNode = node.next;
      if(node.value > 1) {
        node.value--;
        let targetNode = node.prev;
        while(targetNode !== this.dummyHead && targetNode.value > node.value) {
          targetNode = targetNode.prev;
        }
        // Need to adjust the position of the linked list at different times
        if(prevNode !== targetNode) {
          this.insertNode(targetNode, node, targetNode.next);
          this.deleteNode(prevNode, nextNode);
        }
      } else {
        this.deleteNode(prevNode, nextNode);
        map.delete(key);
        node = null;
      }
    } else {
      return;
    }
  }
  /**
   * Returns one of the keys with maximal value.
   * @return {string}
   */
  getMaxKey() {
    return this.dummyTail.prev.key;
  }
  /**
   * Returns one of the keys with Minimal value.
   * @return {string}
   */
  getMinKey() {
    return this.dummyHead.next.key;
  }
}