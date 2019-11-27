/*
Given a nested list of integers represented as a string, implement a parser to deserialize it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Note: You may assume that the string is well-formed:

String is non-empty.
String does not contain white spaces.
String contains only digits 0-9, [, - ,, ].
Example 1:

Given s = "324",

You should return a NestedInteger object which contains a single integer 324.
Example 2:

Given s = "[123,[456,[789]]]",

Return a NestedInteger object containing a nested list with 2 elements:

1. An integer containing value 123.
2. A nested list containing two elements:
    i.  An integer containing value 456.
    ii. A nested list with one element:
         a. An integer containing value 789.
*/
var deserialize = function(s) {
    var startIndex = -1;
    var root = new NestedInteger();
    var stack = [root];
    var newElement;
    
    var addNum = function(endIndex) {
        if (startIndex === -1) {
            return;
        }
        
        newElement = new NestedInteger();
        newElement.setInteger(s.substring(startIndex, endIndex));
        stack[stack.length - 1].add(newElement);
        startIndex = -1;
    };

    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "[":
                newElement = new NestedInteger();
                stack[stack.length - 1].add(newElement);
                stack.push(newElement);
                break;
            case "]":
                addNum(i);
                stack.pop();
                break;
            case ",":
                addNum(i);
                break;
            default:
                if (startIndex === -1) {
                    startIndex = i;
                }
                break;
        }
    }
    
    addNum(s.length);
    
    return root.getList()[0];
};