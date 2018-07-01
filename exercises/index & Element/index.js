/*
Given a sorted array arr of distinct integers, 
write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. 
Return -1 if there is no such index. 
Analyze the time and space complexities of your solution and explain its correctness.

Examples:

input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.
Constraints:

[time limit] 5000ms

[input] array.integer arr

1 ≤ arr.length ≤ 100
[output] integer

*/
function indexEqualsValueSearch(arr) {
  // your code goes here
  let start_index = 0,end_index = arr.length - 1;
  while(start_index <= end_index){
    let mid = Math.floor(start_index + (end_index - start_index )/2);
    if(arr[mid] === mid)
      return mid;
    else if(arr[mid] - mid < 0)
      start_index = mid + 1;
    else
      end_index = mid - 1;
  }
  return -1;
}