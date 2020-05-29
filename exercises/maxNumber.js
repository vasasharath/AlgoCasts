/*
Given two arrays of length m and n with digits 0-9 representing two numbers. Create the maximum number of length k <= m + n from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the k digits.

Note: You should try to optimize your time and space complexity.

Example 1:

Input:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
Output:
[9, 8, 6, 5, 3]
Example 2:

Input:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
Output:
[6, 7, 6, 0, 4]
Example 3:

Input:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
Output:
[9, 8, 9]
*/
var maxNumber = function(nums1, nums2, k) {
  let res;

  const findNbig = (arr, n) => {
    if(n === 0) return [];
    let ret = [];
    let gap = arr.length - n;
    let i = 0;
    while(i < arr.length){
      if(ret.length === 0) {ret.push(arr[i]);}
      else {
        let curr = arr[i];
        while(curr > ret[ret.length-1] && gap > 0){
          ret.pop();
          gap--;
        }
        ret.push(curr);
      }
      i++;
    }
    return ret.slice(0, n);
  };

  const merge = (arr1, arr2) => {
    let ret = [];
    let p1 = 0, p2 = 0;
    while(p1 < arr1.length || p2 < arr2.length){ 
      let curr1 = arr1[p1];
      let curr2 = arr2[p2];
      if(curr1 === undefined){
        while(p2 < arr2.length) {
          ret.push(arr2[p2]);
          p2++;
        }
        continue;
      }

      if(curr2 === undefined){
        while(p1 < arr1.length){
          ret.push(arr1[p1]);
          p1++;
        }
        continue;
      }
      let i = 1
      while(curr1 === curr2 && (p1+i < arr1.length || p2+i < arr2.length)){
        curr1 += arr1[p1+i] || 0;
        curr2 += arr2[p2+i] || 0;
        i++;
      }

      if(curr1 > curr2){
        ret.push(arr1[p1]);
        p1++;
      } else  {
        ret.push(arr2[p2]);
        p2++;
      }
    }

    return ret;
  };

  const bigger = (arr1, arr2) => {
    //console.log(arr1, arr2);
    let i = 0;
    while(arr1[i] !== undefined){
      if(arr1[i] > arr2[i]) return arr1;
      if(arr1[i] < arr2[i]) return arr2;
      i++;
    }
    return arr1;
  };

  for(let i = 0; i <= k; i++){
    if(i > nums1.length || (k-i) > nums2.length) continue;
    let tem = merge( findNbig(nums1, i), findNbig(nums2, k - i) );
    if(!res) {res = tem;}
    else {
      res = bigger(res, tem);
    }
  }

  return res;
};