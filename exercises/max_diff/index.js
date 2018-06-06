/*
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
*/
function maxdiff(arr) {
	// Maximum difference found so far
	let max_diff = 0;

	// Minimum number visited so far
	let min_element = arr[0];
	for (let i = 1; i < arr.length; i++) {
        //at each step check if the new diff is greater than the previous
		if (arr[i] - min_element > max_diff)
			max_diff = arr[i] - min_element;

		if (arr[i] < min_element)
			min_element = arr[i];
	}

	return max_diff;
}