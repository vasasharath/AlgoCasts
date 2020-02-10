/*
Given a sorted array, two integers k and x, find the k closest elements to x in the array. 
The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

Example 1:
Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]
Example 2:
Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]
Note:
The value k is positive and will always be smaller than the length of the sorted array.
Length of the given array is positive and will not exceed 104
Absolute value of elements in the array and x will not exceed 104
UPDATE (2017/9/19):
The arr parameter had been changed to an array of integers (instead of a list of integers). 
Please reload the code definition to get the latest changes.
*/
var findClosestElements = function(arr, k, x) {
	function binarySearch(arr,x){
		if(arr.length===0 || x<arr[0]) return -1;
		if(x>arr[arr.length-1]) return arr.length;
		let left = 0, right = arr.length-1;
		while(left+1<right){
			let mid = Math.floor((left+right)/2);
			if(arr[mid]===x){
				while(arr[mid-1]===x) mid--;
				return mid;
			}
			if(arr[mid]<x){
				if(arr[mid+1]>x) return mid;
				left = mid+1;
			}
			else {
				if(arr[mid-1]<x) return mid;
				right = mid-1;
			}
		}
		if(arr[left]===x || (arr[left]<x && arr[left+1]>=x)) return left;
		if(arr[right]===x) return right;
		if(arr[right]>x && arr[right-1]<=x) return right-1;
	}

	let index = binarySearch(arr,x);
	if(index===-1) return arr.slice(0,k);
	if(index===arr.length) return arr.slice(len-k);

	let left = index-Math.ceil((k-1)/2), right = index+Math.floor((k-1)/2);
	if(left<0) left=0, right=k-1;
	if(right>=arr.length) right = arr.length-1, left = arr.length-k;
	while(x-arr[left-1]<=arr[right]-x && left-1>-1) left--, right--;
	while(arr[right+1]-x<x-arr[left] && right+1<arr.length) left++, right++;
	return arr.slice(left, right+1);	
};