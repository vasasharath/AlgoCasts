/*
Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

Example 1:

add(1); add(3); add(5);
find(4) -> true
find(7) -> false
Example 2:

add(3); add(1); add(2);
find(3) -> true
find(6) -> false
*/
class TwoSum {
    constructor() {
        this.map = new Map();
    }
    add(number) {
        this.map.set(number, this.map.get(number) + 1 || 1);
    }
    find(value) {
        for(const num of this.map.keys()) {
            const rest = value - num;
            if(rest === num) {
                if(this.map.get(num) > 1) return true;
                else continue;
            }
            else if(this.map.has(rest)) return true;
        }
        return false;
    }
}