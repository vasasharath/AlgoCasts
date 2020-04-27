/*
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Example 1:

Input: num = "123", target = 6
Output: ["1+2+3", "1*2*3"] 
Example 2:

Input: num = "232", target = 8
Output: ["2*3+2", "2+3*2"]
Example 3:

Input: num = "105", target = 5
Output: ["1*0+5","10-5"]
Example 4:

Input: num = "00", target = 0
Output: ["0+0", "0-0", "0*0"]
Example 5:

Input: num = "3456237490", target = 9191
Output: []
*/
var addOperators = function(num, target) {
    let res = [];
     function helper (num, target, diff, curSum, temp, res) {
        if(num.length === 0 && curSum === target) {
            res.push(temp);
            return;
        }
        for(let i = 1; i <= num.length; i++) {
            let cur = num.substr(0, i);
            if(cur.length > 1 && cur[0] === '0') return;
            let next = num.substr(i);
            let n = Number(cur);
            if(n > Number.MAX_VALLUE) return;
            if(temp.length > 0) {
                helper(next, target, n, curSum + n, temp + '+' + cur, res);
                helper(next, target, -n, curSum - n, temp + '-' + cur, res);
                helper(next, target, diff * n, (curSum - diff) + diff * n, temp + '*' + cur, res);
            } else {
                helper(next, target, n, n, cur, res);
            }
        }
    }
    helper(num, target, 0, 0, '', res);
    return res;
};