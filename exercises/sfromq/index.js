/*
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Example:

MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
Notes:

You must use only standard operations of a queue -- 
which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, queue may not be supported natively. 
You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
*/

var MyStack = function() {
    this.queue = new Queue();
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    var element;
     var keep  = new Queue();
     while(!this.queue.isEmpty()){
        element = this.queue.pop();
        if(!this.queue.isEmpty()){
            keep.push(element);
        }
     }

     while(!keep.isEmpty()){
        this.queue.push(keep.pop());
     }
    return element;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
     var element;
     var keep  = new Queue();
     while(!this.queue.isEmpty()){
        element = this.queue.pop();
        keep.push(element);
     }

     while(!keep.isEmpty()){
        this.queue.push(keep.pop());
     }
    return element;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.isEmpty();
};

var Queue = function(){
    this.list = [];
}

Queue.prototype.push = function(x){
    this.list.push(x);
}

Queue.prototype.peek = function(){
    return this.list[0];
}

Queue.prototype.pop = function(){
    return this.list.shift();
}

Queue.prototype.isEmpty = function(){
    return this.list.length == 0;
}