/*
Design your implementation of the circular double-ended queue (deque).

Your implementation should support following operations:

MyCircularDeque(k): Constructor, set the size of the deque to be k.
insertFront(): Adds an item at the front of Deque. Return true if the operation is successful.
insertLast(): Adds an item at the rear of Deque. Return true if the operation is successful.
deleteFront(): Deletes an item from the front of Deque. Return true if the operation is successful.
deleteLast(): Deletes an item from the rear of Deque. Return true if the operation is successful.
getFront(): Gets the front item from the Deque. If the deque is empty, return -1.
getRear(): Gets the last item from Deque. If the deque is empty, return -1.
isEmpty(): Checks whether Deque is empty or not. 
isFull(): Checks whether Deque is full or not.
 

Example:

MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to be 3
circularDeque.insertLast(1);			// return true
circularDeque.insertLast(2);			// return true
circularDeque.insertFront(3);			// return true
circularDeque.insertFront(4);			// return false, the queue is full
circularDeque.getRear();  			// return 2
circularDeque.isFull();				// return true
circularDeque.deleteLast();			// return true
circularDeque.insertFront(4);			// return true
circularDeque.getFront();			// return 4
 

Note:

All values will be in the range of [0, 1000].
The number of operations will be in the range of [1, 1000].
Please do not use the built-in Deque library.
*/
var MyCircularDeque = function(k) {
    this.deque = []
    this.dequeLen = k
    this.fontPoint = 0
    this.lastPoint = 0
    this._isEmpty = true
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    var realLast = this.lastPoint < this.fontPoint ? this.lastPoint + this.dequeLen  + 1 : this.lastPoint + 1
    var curLen = realLast - this.fontPoint
    if(curLen < this.dequeLen) {
        var newFontPoint = this.fontPoint > 0 ? this.fontPoint - 1 : this.dequeLen - 1
         if(this._isEmpty) {
            this.deque[this.fontPoint] = value
          
            this._isEmpty = false
        } else {
            this.deque[newFontPoint] = value
            this.fontPoint = newFontPoint
        }
        
        
       
        return true
    } else {
        return false
    }
       
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
   var realLast = this.lastPoint < this.fontPoint ? this.lastPoint + this.dequeLen + 1 : this.lastPoint + 1
    var curLen = realLast - this.fontPoint
    if(curLen < this.dequeLen) {
        var newlastPoint = this.lastPoint < this.dequeLen - 1 ? this.lastPoint + 1 : 0
       if(this._isEmpty) {
            this.deque[this.lastPoint] = value
            this._isEmpty = false
        } else {
            this.deque[newlastPoint] = value
            this.lastPoint = newlastPoint
            
        }
        return true
    } else {
        return false
    }
    
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    var realLast = this.lastPoint < this.fontPoint ? this.lastPoint +this.dequeLen + 1 : this.lastPoint + 1
    var curLen =  realLast - this.fontPoint
    
    if(curLen > 0 && this.deque[this.fontPoint] !== -1) {
        this.deque[this.fontPoint] = -1
        if(this.fontPoint === this.lastPoint) {
            this._isEmpty = true
        } else {
            this.fontPoint = this.fontPoint< this.dequeLen - 1 ? this.fontPoint + 1: 0
        }
      
        
        return true
    } else {
        return false
    }
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    var realLast = this.lastPoint < this.fontPoint ? this.lastPoint + this.dequeLen + 1   : this.lastPoint+ 1
    var curLen = this._isEmpty ? realLast - this.fontPoint : realLast - this.fontPoint + 1
    if(curLen > 0 && this.deque[this.lastPoint] !== -1 ) {
        this.deque[this.lastPoint] = -1
          if(this.fontPoint === this.lastPoint) {
            this._isEmpty = true
        } else {
             this.lastPoint = this.lastPoint > 0 ? this.lastPoint  -  1: this.dequeLen - 1
        }
      
       
        return true
    } else {
        return false
    }
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
   return this.deque[this.fontPoint]
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    return this.deque[this.lastPoint]
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this._isEmpty
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
     var realLast = this.lastPoint < this.fontPoint ? this.lastPoint + this.dequeLen : this.lastPoint
    var curLen = this._isEmpty ? realLast - this.fontPoint : realLast - this.fontPoint + 1
    if(!this._isEmpty && curLen ===this.dequeLen ){
        return true
    } else {
        return false
    }
};