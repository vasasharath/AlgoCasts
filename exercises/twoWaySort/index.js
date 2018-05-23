/*Given an array of integers (both odd and even), sort them in such a way that 
the first part of the array contains odd numbers sorted in descending order, 
rest portion contains even numbers sorted in ascending order. */

function twoWaySort(arr) {
	let l = 0,
	r = arr.length - 1,
	k = 0;
	while (l < r) {
		if (arr[l] % 2 != 0) {
			l++;
			k++;
		}
		// Find first even number from right side.
		while (arr[r] % 2 == 0 && l < r)
			r--;

		// Swap odd number present on left and even
		// number right.
		if (l < r) {
			arr[l] = arr[l] + arr[r];
			arr[r] = arr[l] - arr[r];
			arr[l] = arr[l] - arr[r];
		}
	}
	for (let i = 0; i < k; i++) {
		for (let j = i + 1; j < k; j++) {
			if (arr[j] < arr[i]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	for (let i = k + 1; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] > arr[i]) {
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
console.log(twoWaySort([-1, -2, -3, -5, -4, -7, -10]));