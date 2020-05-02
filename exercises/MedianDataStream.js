/*
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
 

Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
 

Follow up:

If all integer numbers from the stream are between 0 and 100, how would you optimize it?
If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?
*/
function binarySearch(arr, target, l, r) {
  if (l === r) {
    return arr[l] > target ? l : l + 1;
  }
  let mid = Math.floor((l + r) / 2);
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, r);
  if (arr[mid] > target) return binarySearch(arr, target, l, mid);
  return mid;
}

var MedianFinder = function() {
  this.arr = [];
};

MedianFinder.prototype.addNum = function(num) {
  if (this.arr.length === 0) {
    this.arr.push(num);
    return;
  }
  let index = binarySearch(this.arr, num, 0, this.arr.length - 1);
  this.arr.splice(index, 0, num);
};

MedianFinder.prototype.findMedian = function() {
  if (this.arr.length === 0) {
    return null;
  }
  let mid = this.arr.length / 2;
  if (this.arr.length % 2 === 0) {
    return ((this.arr[mid] + this.arr[mid - 1]) / 2);
  }
  return this.arr[Math.floor(mid)];
};