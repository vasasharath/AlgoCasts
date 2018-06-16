/*
There are n stairs, a person standing at the bottom wants to reach the top. 
The person can climb either 1 stair or 2 stairs at a time. 
Count the number of ways, the person can reach the top.
*/
function fib(n)
{
   if (n <= 1)
      return n;
   return fib(n-1) + fib(n-2);
}
 
// Returns number of ways to reach s'th stair
function countWays(s)
{
    return fib(s + 1);
}

console.log(countWays(8));