/*
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Input: [5,2,6,1]
Output: [2,1,1,0] 
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
*/
var countSmaller = function(nums) {
    if(nums.length === 0)  return [];
    if(nums.length === 1)  return [0];
    var items = nums.map(function(n, i){
        return {
            index: i,
            value: n,
            count: 0
        };
    });
    function helper(items){
        var len = items.length, half = ((len - 1) >> 1);
        if(len <= 1){
            return items;
        }
        if(len === 2){
            if(items[1].value < items[0].value){
                items[0].count++;
                var t = items[1];
                items[1] = items[0];
                items[0] = t;
            }
            return items;
        }
        var left = items.slice(0, half + 1), right = items.slice(half + 1);
        left = helper(left), right = helper(right);
        var ret = [], i = 0, j = 0;
        while(i < left.length && j < right.length){
            var item1 = left[i], item2 = right[j];
            if(item1.value <= item2.value){
                ret.push(item1);
                i++;
                item1.count += j;
            }else{
                ret.push(item2);
                j++;
            }
        }
        while(i < left.length){
            var item1 = left[i++];
            ret.push(item1);
            item1.count += j;
        }
        while(j < right.length){
            ret.push(right[j++]);
        }
        return ret;
    }
    items = helper(items);
    items.sort(function(a,b){
        return a.index - b.index;
    });
    return items.map(function(item){
        return item.count;
    });
};