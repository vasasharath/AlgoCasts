/*
There are n stairs, a person standing at the bottom wants to reach the top. 
The person can climb either 1 stair or 2 stairs at a time. 
Count the number of ways, the person can reach the top.
*/

 
// Returns number of ways to reach s'th stair
function countWays(s)
{
    return fib(s + 1);
}

const MAX = 1000;
let f = Array(MAX).fill(0);


const fib = (n) => {
let k;
    if (n == 0) {
        return 0;
    }

    if (n == 1 || n == 2) {
        f[n] = 1;

        return f[n]
    }

    if (f[n]) {
        return f[n]
    }

    if (n & 1) {
        k = Math.floor(((n + 1) / 2))
    } else {
        k = Math.floor(n / 2)
    }

    if ((n & 1)) {
        //formula to calculate nth fib number
        f[n] = (fib(k) * fib(k) + fib(k-1) * fib(k-1))
    } else {
        f[n] = (2*fib(k-1) + fib(k))*fib(k)
    }

    return f[n]
}

console.log(countWays(8));