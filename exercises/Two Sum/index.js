/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // our two sum function which will return
// all pairs in the array that sum up to S

  var hashTable = {};

  // check each element in array
  for (var i = 0; i < nums.length; i++) {
 
    // calculate S - current element
    var sumMinusElement = target - nums[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) { 
      return [i, nums.indexOf(sumMinusElement)];
    }

    // add the current number to the hash table
    hashTable[nums[i].toString()] = nums[i];

  }

};