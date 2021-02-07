/*
Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.

As the answer can be very large, return it modulo 109 + 7.

 

Example 1:

Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
Output: 20
Explanation: 
Enumerating by the values (arr[i], arr[j], arr[k]):
(1, 2, 5) occurs 8 times;
(1, 3, 4) occurs 8 times;
(2, 2, 4) occurs 2 times;
(2, 3, 3) occurs 2 times.
Example 2:

Input: arr = [1,1,2,2,2,2], target = 5
Output: 12
Explanation: 
arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
We choose one 1 from [1,1] in 2 ways,
and two 2s from [2,2,2,2] in 6 ways.
 

Constraints:

3 <= arr.length <= 3000
0 <= arr[i] <= 100
0 <= target <= 300
*/
var threeSumMulti = function(A, target) {
	let mod=1e9+7, res=0;
	let count={}, uni=[];
	for(let a of A){
		if(!count[a]){
			count[a]=0;
			uni.push(a);
		}
		count[a]++;
	}
	uni.sort((a,b)=>a-b);
	for(let i=0; i<uni.length; i++){
		let mid=uni[i];
		if(target-mid-uni[0]<mid) break;
		for(let j=0; j<i; j++){
			let left=uni[j];
			if(target-mid-left<mid) break;
			let right=target-left-mid;
			if(right===mid){
				// situation 1: [left mid mid]
				res=(res+count[left]*count[mid]*(count[mid]-1)/2)%mod;
			}
			else if(count[right]){
				// situation 2: [left mid right]
				res=(res+count[left]*count[mid]*count[right])%mod;
			}
		}
		if(count[mid]>1){
			let right=target-2*mid;
			if(right>mid && count[right]>0){
				// situation 3: [mid mid right]
				res=(res+count[mid]*(count[mid]-1)*count[right]/2)%mod;
			}
			else if(right===mid && count[mid]>=3){
				// situation 4: [mid mid mid]
				res=(res+count[mid]*(count[mid]-1)*(count[mid]-2)/6)%mod;
			}
		}
	}
	return res;
};