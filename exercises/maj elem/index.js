/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let maj_index = 0,
	count = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[maj_index] == nums[i])
			count++;
		else
			count--;
		if (count == 0) {
			maj_index = i;
			count = 1;
		}
	}
	let cand = nums[maj_index];
	count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == cand)
			count++;
	}
	if (count > Math.floor((nums.length) / 2))
		return cand;
	else
		return 0;
};