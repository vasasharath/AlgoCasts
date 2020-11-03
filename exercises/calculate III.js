/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators , open ( and closing parentheses ) and empty spaces . The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-2147483648, 2147483647].

Follow up: Could you solve the problem without using built-in library functions.

 

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 6-4 / 2 "
Output: 4
Example 3:

Input: s = "2*(5+5*2)/3+(6/2+8)"
Output: 21
Example 4:

Input: s = "(2+6* 3+5- (3*14/7+2)*5)+3"
Output: -12
Example 5:

Input: s = "0"
Output: 0
 

Constraints:

1 <= s <= 104
s consists of digits, '+', '-', '*', '/', '(', ')' and ' '.
s is a valid expression.
*/
var calculate = function(s) {
    let i = 0;
    const rec = () => {
        let [sum, lo, num, tsum] = [0, '+', 0, 0];
        const set = new Set(['+', '-', '*', '/']);
        while(i < s.length) {
            if(s[i] === '(') {
                i++;
                num = rec();
                //console.log(s[i], sum, tsum, num, lo);
            } else {
                if(s[i] >= '0' && s[i] <= '9') {
                    num = num * 10 + parseInt(s[i]);
                }
            }
            if(set.has(s[i]) || i >= s.length-1 || s[i] === ')') {
                switch(lo) {
                    case '+':
                        sum += tsum;
                        tsum = num;
                        break;
                    case '-':
                        sum += tsum;
                        tsum = -num;
                        break;
                    case '*':
                        tsum *= num;
                        break;
                    case '/':
                        tsum = Math.trunc(tsum/num);
                        break;    
                }
                num = 0;
                lo = s[i];
            }
            if(s[i] === ')') {
                sum += tsum;
                //console.log(s[i], sum, tsum, num);
                i++;
                return sum;
            }
            i++;
        }
        sum += tsum;
        //console.log('jkhjk', s[i], sum, tsum, num);
        return sum;
    };
    
    return rec();
};