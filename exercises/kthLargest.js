/*
Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, 
not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, 
which contains initial elements from the stream. For each call to the method KthLargest.
add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
Note: 
You may assume that nums' length ≥ k-1 and k ≥ 1.
*/
/*
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.kIndex = k;
    this.nums = nums;
    this.nums.sort((a, b) => a - b);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    var insert = sortedIndex(this.nums, val);
    this.nums.splice(insert, 0, val);

    return this.nums[this.nums.length - this.kIndex];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */
function sortedIndex(array, value) {
    var low = 0;
    var high = array.length;

    while (low < high) {
        var mid = (low + high) >>> 1;
        if (array[mid] < value) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    return low;
}