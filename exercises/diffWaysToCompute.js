/*
Given a string of numbers and operators, return all possible results from computing all the different possible ways 
to group numbers and operators. The valid operators are +, - and *.

Example 1:

Input: "2-1-1"
Output: [0, 2]
Explanation: 
((2-1)-1) = 0 
(2-(1-1)) = 2
Example 2:

Input: "2*3-4*5"
Output: [-34, -14, -10, -10, 10]
Explanation: 
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
*/
var diffWaysToCompute = function(input) {
  let map = {};
  
  return recursive(input, map);
};

function recursive(input, map) {
  let res = [];
  for(let i = 0; i < input.length; i++) {
    let ele = input[i];
    if(ele == '+' || ele == '-' || ele == '*') {
      let firstPart = map[input.slice(0, i)] || recursive(input.slice(0, i), map);
      let secondPart = map[input.slice(i + 1)] || recursive(input.slice(i + 1), map);
      for(let j = 0; j < firstPart.length; j++) {
        let first = +firstPart[j];
        for(let k = 0; k < secondPart.length; k++) {
          let second = +secondPart[k];
          let c = 0;
          switch(input[i]) {
            case '+': 
              c = first + second;
              break;
            case '-':
              c = first - second;
              break;
            case '*':
              c = first * second;
              break;
          }
          res.push(c);
        }
      }
    }
  }
  
  if(!res.length) {
    res.push(input);
  }
  map[input] = res;
  
  return res;
}