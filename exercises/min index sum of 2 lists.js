/*
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists
*/

var findRestaurant = function(list1, list2) {
   const commonInterest = [];
    
    list1.forEach((res, index1) => {
        const index2 = list2.indexOf(res);
        
        // collect an array of common interests with index sum as index
        if (index2 !== -1) {
            const indexSum = index1 + index2;
            
            if (!commonInterest[indexSum]) commonInterest[indexSum] = [];
            commonInterest[indexSum].push(res);
        }
    });
    
    // return the common interests with the minimum index sum
    for (let i = 0; i < commonInterest.length; i++)
        if (commonInterest[i]) return commonInterest[i];
};