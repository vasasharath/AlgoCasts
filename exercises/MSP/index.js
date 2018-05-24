/* Given an array that contains both positive and negative integers, 
find the product of the maximum product subarray. */

function MSP(nums) {
	let max = nums[0];
	let cache = 1;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			cache = 1;
			max = Math.max(max, 0);
		} else {
			cache *= nums[i];
			max = Math.max(max, cache);
		}
	}
	cache = 1;
	for (i = nums.length - 1; i > 0; i--) {
		if (nums[i] === 0) {
			cache = 1;
			max = Math.max(max, 0);
		} else {
			cache *= nums[i];
			max = Math.max(max, cache);
		}
	}
	return max;
}