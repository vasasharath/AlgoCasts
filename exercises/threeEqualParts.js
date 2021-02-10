/*
You are given an array arr which consists of only zeros and ones, divide the array into three non-empty parts such that all of these parts represent the same binary value.

If it is possible, return any [i, j] with i + 1 < j, such that:

arr[0], arr[1], ..., arr[i] is the first part,
arr[i + 1], arr[i + 2], ..., arr[j - 1] is the second part, and
arr[j], arr[j + 1], ..., arr[arr.length - 1] is the third part.
All three parts have equal binary values.
If it is not possible, return [-1, -1].

Note that the entire part is used when considering what binary value it represents. For example, [1,1,0] represents 6 in decimal, not 3. Also, leading zeros are allowed, so [0,1,1] and [1,1] represent the same value.

 

Example 1:

Input: arr = [1,0,1,0,1]
Output: [0,3]
Example 2:

Input: arr = [1,1,0,1,1]
Output: [-1,-1]
Example 3:

Input: arr = [1,1,0,0,1]
Output: [0,2]
 

Constraints:

3 <= arr.length <= 3 * 104
arr[i] is 0 or 1
*/
var threeEqualParts = function(A) {
    const getOneCount = () => {
        const oneCount = A.reduce((acc, bit) => bit == 1 ? acc + 1 : acc, 0)
        if(oneCount % 3 == 0) 
            return oneCount / 3
        return -1
    }

    const getTail = oneCount => { 
        let zeroCount = 0, idx = A.length -1
        let oneRemain = oneCount
        while(oneRemain > 0) {
            if(A[idx] == 1) {
                oneRemain--
            }
            if(A[idx] == 0 && oneRemain == oneCount) {
                zeroCount++
            }
            idx--
        }
        return {zeroCount, tailStart: idx + 1}
    }

    const getHead = (oneCount, zeroCount) => {
        let idx = 0
        while(oneCount > 0) {
            if(A[idx] == 1)
                oneCount--
            idx++
        }
        if(zeroCount > 0) {
            while(A[idx] == 0 && zeroCount > 0){
                idx++
                zeroCount--
            }
        }
        return zeroCount == 0 ? idx-1 : -1
    }

    const getMiddle = (oneCount, headEnd, tailStart) => {
        let idx = headEnd + 1
        let tailIdx = tailStart
        while(A[idx] != 1) idx++
        while(idx < tailStart && A[idx] == A[tailIdx]) {
            idx++
            tailIdx++
        }
        if(tailIdx != A.length)
            return -1
        return idx

    }

    const oneCount = getOneCount()
    if(oneCount == -1 || A.length < 3)
        return [-1, -1]
    if(oneCount == 0) return [0, A.length-1]
    const {tailStart, zeroCount} = getTail(oneCount)
    const headEnd = getHead(oneCount, zeroCount)
    if(headEnd == -1)
        return [-1, -1]
    const middleEnd = getMiddle(oneCount, headEnd, tailStart)
    if(middleEnd == -1)
        return [-1, -1]
    return [headEnd, middleEnd]
};