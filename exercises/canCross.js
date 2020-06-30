/*
A frog is crossing a river. The river is divided into x units and at each unit there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

Given a list of stones' positions (in units) in sorted ascending order, determine if the frog is able to cross the river by landing on the last stone. Initially, the frog is on the first stone and assume the first jump must be 1 unit.

If the frog's last jump was k units, then its next jump must be either k - 1, k, or k + 1 units. Note that the frog can only jump in the forward direction.

Note:

The number of stones is ≥ 2 and is < 1,100.
Each stone's position will be a non-negative integer < 231.
The first stone's position is always 0.
Example 1:

[0,1,3,5,6,8,12,17]

There are a total of 8 stones.
The first stone at the 0th unit, second stone at the 1st unit,
third stone at the 3rd unit, and so on...
The last stone at the 17th unit.

Return true. The frog can jump to the last stone by jumping 
1 unit to the 2nd stone, then 2 units to the 3rd stone, then 
2 units to the 4th stone, then 3 units to the 6th stone, 
4 units to the 7th stone, and 5 units to the 8th stone.
Example 2:

[0,1,2,3,4,8,9,11]

Return false. There is no way to jump to the last stone as 
the gap between the 5th and 6th stone is too large.
*/
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    for(let i = 3;i<stones.length;i++){
        if(stones[i]>stones[i-1]*2){
            return false;
        }
    }
    
	//populate a hashmap with the positions of the stones (u'll need this later)
    let lookup = new Map();
    for(let i of stones){
        lookup.set(i);
    }
    
	//when you see this stone, you know you've reached the end and solved the problem
    let end = stones[stones.length-1];
    
	//2 stacks which help us get the current position & jump
    let positions = [0];
    let jumps = [0];
    
	//while there is something in the stack, iterate
    while(positions.length){
        let currentPos = positions.pop();
        let currentJump = jumps.pop();
		//try all possible jump distances
        for(let i = currentJump-1;i<=currentJump+1;i++){
		//if a jump distance is <= 0 we know we're going back to a position we've already seen. we dont want this
            if(i<=0){
                continue;
            }
            let nextPos = currentPos+i;
            if(nextPos==end){//if we hit this we reach the end
                return true;
            }
            if(lookup.has(nextPos)){//check if the nextPos is ana available position to jump to, if so add it to the stacks
                positions.push(nextPos);
                jumps.push(i);
            }
        }
    }
    
    return false;
};