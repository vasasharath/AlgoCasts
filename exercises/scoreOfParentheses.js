/*
Given a balanced parentheses string S, compute the score of the string based on the following rule:

() has score 1
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 

Example 1:

Input: "()"
Output: 1
Example 2:

Input: "(())"
Output: 2
Example 3:

Input: "()()"
Output: 2
Example 4:

Input: "(()(()))"
Output: 6
 

Note:

S is a balanced parentheses string, containing only ( and ).
2 <= S.length <= 50
*/
var scoreOfParentheses = function(S) {
   let res = 0, cur = 0;
    let st = [];
    for(let i = 0 ; i < S.length; i++){
        let c = S.charAt(i);
        switch(c) {
            case '(':
                st.push(c);
                break;
            case ')':
                let tem = st.pop();
                if(tem === '(') {
                    st.push(1);
                } else {
                    // it is number
                    let num = tem;
                    // when st is empty, st.pop() will return undefined, it is coverd
                    while( (tem = st.pop()) !== '('){
                        num += tem;
                    }
                    if(tem === '(')
                    st.push(2 * num);
                    else st.push(num)
                }
                break;
        }
    }
    return st.reduce((sum, cur) => sum + cur);  
};