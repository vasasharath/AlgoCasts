/*You are given a list of n-1 integers and these integers are in the range of 1 to n. There are no 
duplicates in list. One of the integers is missing in the list. 
Write an efficient code to find the missing integer.*?
/*
function findMissingNum(arr) {
    //find the maximum of the array
	const max = Math.max(...arr);
    //find the sum of array elements
	const sum = arr.reduce((a, b) => a + b);
	return (max * (max + 1) / 2) - sum;
}*/

function findMissingNum(arr) {
    //find the maximum element of the array
	const max = Math.max(...arr);
	let r1 = arr[0],
	r2 = 1;
    //for each element of the array perform XOR operation with the next element
	for (let i = 1; i < arr.length; i++) {
		r1 = r1 ^ arr[i];
	}
    //from 1 to max number perform XOR on each element with the next element
	for (i = 2; i <= max; i++) {
		r2 = r2 ^ i;
	}
    //Finally XOR between these two numbers will give the missing number
	return (r1 ^ r2);
}