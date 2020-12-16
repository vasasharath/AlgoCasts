/*
There are N dominoes in a line, and we place each domino vertically upright.

In the beginning, we simultaneously push some of the dominoes either to the left or to the right.



After each second, each domino that is falling to the left pushes the adjacent domino on the left.

Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.

Return a string representing the final state. 

Example 1:

Input: ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."
Example 2:

Input: "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.
Note:

0 <= N <= 10^5
String dominoes contains only 'L', 'R' and '.'
*/
var pushDominoes = function(dominoes) {
  const dominoList = dominoes.split('');
  let start = 0;
  let end = 0;
  dominoList.unshift('L');
  dominoList.push('R');
  // console.log('dominoList', dominoList);
  
  for(let i = 1; i < dominoList.length; i++){
    end = i;

    if(dominoList[i] !== '.'){
      // console.log(start, end);
      while(end - start > 2){
        if(dominoList[start] === 'R'){
          dominoList[start+1] = 'R';
          start++;  
        }
        if(dominoList[end] === 'L'){
          dominoList[end-1] = 'L';
          end--;
        }
        // jump out
        if(dominoList[start] === 'L' && dominoList[end] === 'R'){
          break;
        }
      }
      // X.X
      if(end - start === 2){
        if(dominoList[start] === dominoList[end]){
          dominoList[start+1] = dominoList[start];
        }
      }
      start = i;
    }
  }
  
  return dominoList.slice(1, -1).join('');
};
