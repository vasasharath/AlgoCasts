//Given three arrays sorted in non-decreasing order, print all common elements in these arrays.

function commonElements(arr1, arr2, arr3) {
	let i = 0,
	j = 0,
	k = 0;

	// Iterate through three arrays while all arrays have elements
	while (i < arr1.length && j < arr2.length && k < arr3.length) {

		// If x = y and y = z, print any of them and move ahead
		// in all arrays
		if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
			console.log(arr1[i]);
			i += 1;
			j += 1;
			k += 1;
		}

		// x < y
		else if (arr1[i] < arr2[j])
			i += 1;

		// y < z
		else if (arr2[j] < arr3[k])
			j += 1;

		// We reach here when x > y and z < y, i.e., z is smallest
		else
			k += 1;
	}

}

arr1 = [1, 5, 10, 20, 40, 80];
arr2 = [6, 7, 20, 80, 100];
arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
commonElments(arr1, arr2, arr3)