/*
A Range Module is a module that tracks ranges of numbers. Your task is to design and implement the following interfaces in an efficient manner.

addRange(int left, int right) Adds the half-open interval [left, right), tracking every real number in that interval. Adding an interval that partially overlaps with currently tracked numbers should add any numbers in the interval [left, right) that are not already tracked.
queryRange(int left, int right) Returns true if and only if every real number in the interval [left, right) is currently being tracked.
removeRange(int left, int right) Stops tracking every real number currently being tracked in the interval [left, right).
Example 1:
addRange(10, 20): null
removeRange(14, 16): null
queryRange(10, 14): true (Every number in [10, 14) is being tracked)
queryRange(13, 15): false (Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)
queryRange(16, 17): true (The number 16 in [16, 17) is still being tracked, despite the remove operation)
Note:

A half open interval [left, right) denotes all real numbers left <= x < right.
0 < left < right < 10^9 in all calls to addRange, queryRange, removeRange.
The total number of calls to addRange in a single test case is at most 1000.
The total number of calls to queryRange in a single test case is at most 5000.
The total number of calls to removeRange in a single test case is at most 1000.
*/
class Interval {
    constructor (left, right) {
        this.left = left
        this.right = right
    }
}

var RangeModule = function() {
    this.range = []
};

RangeModule.prototype.addRange = function(left, right) {
    const newArr = [] // Replace the existent range array

    let itv
    let i = 0
    for (; i < this.range.length; i++) {
        itv = this.range[i]
        
        if (itv.left > right) break

        // No overlapping, so just push
        if (itv.right < left) {
            newArr.push(itv)
            
        // Merge overlapping intervals
        } else {
            left =  Math.min(itv.left, left)
            right = Math.max(itv.right, right)
        }
    }

    // Add the merged interval
    newArr.push(new Interval(left, right))
    
    // Add the non-overlapping intervals after `right`
    if (i < this.range.length) newArr.push(...this.range.slice(i))
    
    this.range = newArr
};

RangeModule.prototype.queryRange = function(left, right) {
    if (this.range.length === 0) return false
    
    let lo = 0
    let hi = this.range.length - 1
    let mid
    while (lo < hi) {
        mid = ~~((hi - lo) / 2) + lo
        if (this.range[mid].left === left) {
            lo = mid
            break
        } else if (this.range[mid].left > left) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    
    const itv = this.range[lo].left === left
        ? this.range[lo]
        : this.range[lo].left > left ? this.range[lo - 1] : this.range[lo]

    return Boolean(itv && left >= itv.left && right <= itv.right)
};

RangeModule.prototype.removeRange = function(left, right) {
    if (this.range.length === 0 ||
        left > this.range[this.range.length - 1].right ||
        right < this.range[0].left
       ) return

    const newArr = []
    const tmp = [] // Store the new created intervals by removal

    let i = 0
    let itv
    for (; i < this.range.length; i++) {
        itv = this.range[i]
        if (itv.left >= right) break
        if (itv.right <= left) {
            newArr.push(itv)
        } else {
            if (itv.left < left) {
                tmp.push(new Interval(itv.left, left))
            }
            if (itv.right > right) {
                tmp.push(new Interval(right, itv.right))
            }
        }
    }
    
    if (tmp.length) newArr.push(...tmp)
    if (i < this.range.length) newArr.push(...this.range.slice(i))
    
    this.range = newArr
};