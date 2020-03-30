/*
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

Example 1:

Input: "1 + 1"
Output: 2
Example 2:

Input: " 2-1 + 2 "
Output: 3
Example 3:

Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.
*/
var calculate = function(s) {
    let result = 0, sign = 1;
    const stack = [], opStack = [];
    
    for(let i = 0; i < s.length; i++){
        const curr = s.charAt(i);
        if(curr === ' '){ 
            continue;
        } else if(curr === '+'){ 
            sign = 1;
        } else if(curr === '-'){ 
            sign = -1;
        } else if(curr >= '0' && curr <= '9'){
            let num = curr;
            while(i+1 < s.length && s.charAt(i+1) >= '0' && s.charAt(i+1) <= '9'){
                num += s.charAt(i+1);
                i++;
            }
            result += sign * parseInt(num);
        } else if(curr === '('){
            stack.push(result);  
            result = 0;  
            opStack.push(sign);  
            sign = 1;
        } else if(curr === ')'){
            result = opStack.pop() * result + stack.pop();  
            sign = 1;
        }
    }
    return result; 
};