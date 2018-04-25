// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/* function fib(n) {
	let a = 0,
	b = 1,
	count = 2,
	add = a + b;
    if (n === 2)
        return 1;
	if (n < 2)
        return n;
	while (count < n) {
		a = b;
		b = add;
		add = a + b;
		count++;
	}
	if (count === n)
		return add;
} */

function fib(n) {
 if (n < 2)
     return n;
 else
     return fib (n - 1) + fib (n - 2);
}
module.exports = fib;
