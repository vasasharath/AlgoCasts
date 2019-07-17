/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/
var multiply = function(num1, num2) {
     var arr = []

    for (var i = num1.length - 1; i >= 0; i --){
        var x = num1.charCodeAt(i) - 48
        for (var j = num2.length - 1; j >= 0; j --){
            var y = num2.charCodeAt(j) - 48

            var skip = num1.length - 1 - i + num2.length - 1 - j

            arr[skip] = (arr[skip] == undefined? 0: arr[skip]) + x * y
        }
    }


    var final = []
    var temp = 0
    for (var k = 0; k <= arr.length; k++){
        var sum = (arr[k] == undefined? 0: arr[k]) + temp
        final[k] = sum % 10
        temp = Math.floor(sum/10)
    }

    var finalStr = ""
    for (var idx = final.length -1; idx >= 0; idx --) {
        if (finalStr.length == 0 && final[idx] == 0) continue;
        finalStr += String.fromCharCode(final[idx] + 48)
    }

    return finalStr == ""? "0": finalStr
};