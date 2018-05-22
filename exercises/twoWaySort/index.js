/*Given an array of integers (both odd and even), sort them in such a way that 
the first part of the array contains odd numbers sorted in descending order, 
rest portion contains even numbers sorted in ascending order. */

function twoWaySort(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1 || arr[i] % 2 === -1) {
			arr[i] *= -1;
		}
	}

	arr = arr.sort(function (a, b) {
			return a - b;
		});

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === -1 || arr[i] % 2 === 1) {
			arr[i] *= -1;
		}
	}

	return arr;
}