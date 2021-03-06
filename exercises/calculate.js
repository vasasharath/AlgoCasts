/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . 
The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.
*/
var calculate = function(s) {
     if (s.length === 0) {
        return 0;
    }
    
    // The first operator will always be implicitly '+'
    // since "string contains only non-negative integers".
    let op = '+';
        
    // this is kind of an "addition stack". the numbers in this stack
    // is sum'ed in the end. 
    let stack = [];
    
    // n is the current digit. loop 1 more time than
    // the length of the string ('<='), to push the last digit
    // to the stack
    for (let i=0, n=0; i <= s.length; ++i) {
        let c = s.charAt(i);
        
        // always skipp white space
        if(c===' ') continue;
        
        // aggregate the digits between each operator
        // into 'n'. 
        if(c >= '0' && c <= '9') {
            n = n * 10 + parseInt(c);
            continue;
        } 
        
        // we have now reached a non-digit character (an operator),
        // time to handle 'n', depending on the last seen operator. 
        if (op === '+') {
            stack.push(n);
        } else if (op === '-') {
            stack.push(-n)
        } else if (op === '*') {
            stack.push(stack.pop() * n);
        } else if (op === '/') {
            stack.push(Math.trunc(stack.pop() / n));
        }
        
        // c must be and operator, so store it for the next number.
        op = c;
        n = 0;
    }
    // return the sum of the stack.
    return stack.reduce((n, acc) => n+acc, 0);
};