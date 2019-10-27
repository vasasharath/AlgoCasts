/*
Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.

Example:

Input: n = 12, primes = [2,7,13,19]
Output: 32 
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 
             super ugly numbers given primes = [2,7,13,19] of size 4.
Note:

1 is a super ugly number for any given primes.
The given numbers in primes are in ascending order.
0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
The nth super ugly number is guaranteed to fit in a 32-bit signed integer.
*/
var nthSuperUglyNumber = function(n, primes) {
    let indeces = [];
    let currents = [];
    let i, l;
    // fill up our indeces array with zeroes to start
    for (i = 0, l = primes.length; i < l; i++) {
        indeces[i] = 0;
    }
    let out = [1]; // we will record or prime multiples here
    
    while (!out[n-1]) { 
        // simply calculate the next multiple of all the primes
        for (i = 0, l = primes.length; i < l; i++) {
            currents[i] = out[indeces[i]] * primes[i]; 
            // so in the case of 2,3,5 , currents would come out as [2,3,5] first round.
            // Then we use 2 and increase the index of that prime. Next round it would calculate to [4,3,5], then use 3, then calculate to [4,6,5] etc
        }
        
        // select the lowest one next so we stay in order
        let next = Math.min(...currents);
        out.push(next);
        
        // and for that prime we increase the index so next round we find the next multiple of that prime
        for (i = 0, l = primes.length; i < l; i++) {
            if (next === out[indeces[i]] * primes[i]) {
                indeces[i] = indeces[i] + 1;
            }
        }
    }
    
    return out[n-1];
};