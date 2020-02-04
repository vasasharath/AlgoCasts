/*
Solve a given equation and return the value of x in the form of string "x=#value". The equation contains only '+', '-' operation, the variable x and its coefficient.

If there is no solution for the equation, return "No solution".

If there are infinite solutions for the equation, return "Infinite solutions".

If there is exactly one solution for the equation, we ensure that the value of x is an integer.

Example 1:
Input: "x+5-3+x=6+x-2"
Output: "x=2"
Example 2:
Input: "x=x"
Output: "Infinite solutions"
Example 3:
Input: "2x=x"
Output: "x=0"
Example 4:
Input: "2x+3x-6x=x+2"
Output: "x=-1"
Example 5:
Input: "x=x+2"
Output: "No solution"
*/
var solveEquation = function(equation) {
    let equality = equation.split('=')
    let left = equality[0]
    let right = equality[1]
    
    let leftSum = getSum(left)
    let rightSum = getSum(right)
    
    let leftXSum = getXSum(left)
    let rightXSum = getXSum(right)
    
    let x = leftXSum - rightXSum
    let num = rightSum - leftSum
    if (x === 0 && num === 0) {
        return "Infinite solutions"
    }
    
    let res = '';
    res = num / x
    if (!isFinite(res)) {
        return 'No solution'
    }
    
    return `x=${res}`
};

var getSum = function(equation) {
    return eval(equation.replace(/[0-9]*x/gm, 0))
}

var getXSum = function(equation) {
    let xArray = equation.match(/(\+|-)?[0-9]*x/gm)
    if (xArray === null) {
        return 0;
    }
    return xArray.reduce((res, val) => {
        if (val === 'x' || val === '+x') {
            res++
        } else if (val === '-x') {
            res--;
        } else {
            res = res + 1 * val.replace('x', '')
        }
        return res
    }, 0)
}