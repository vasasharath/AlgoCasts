/*You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no 
duplicates in list. One of the integers is missing in the list. 
Write an efficient code to find the missing integer.*?
/*
function findMissingNum(arr) {
	const max = Math.max(...arr);
	const sum = arr.reduce((a, b) => a + b);
	return (max * (max + 1) / 2) - sum;
}*/

function findMissingNum(arr) {
    //find the maximum element of the array
	const max = Math.max(...arr);
	let r1 = arr[0],
	r2 = 1;
	for (let i = 1; i < arr.length; i++) {
		r1 = r1 ^ arr[i];
	}
	for (i = 2; i <= max; i++) {
		r2 = r2 ^ i;
	}
	return (r1 ^ r2);
}