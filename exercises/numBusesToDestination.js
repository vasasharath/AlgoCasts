/*
We have a list of bus routes. Each routes[i] is a bus route that the i-th bus repeats forever. For example if routes[0] = [1, 5, 7], this means that the first bus (0-th indexed) travels in the sequence 1->5->7->1->5->7->1->... forever.

We start at bus stop S (initially not on a bus), and we want to go to bus stop T. Travelling by buses only, what is the least number of buses we must take to reach our destination? Return -1 if it is not possible.

Example:
Input: 
routes = [[1, 2, 7], [3, 6, 7]]
S = 1
T = 6
Output: 2
Explanation: 
The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
 

Constraints:

1 <= routes.length <= 500.
1 <= routes[i].length <= 10^5.
0 <= routes[i][j] < 10 ^ 6.
*/
const intersect = (route1, route2) => {
	let i1 = 0,
		i2 = 0;

	while (i1 < route1.length && i2 < route2.length) {
		if (route1[i1] === route2[i2]) {
			return true;
		}
		if (route1[i1] < route2[i2]) {
			i1++;
		} else {
			i2++;
		}
	}

	return false;
};

const binarySearch = (route, stop) => {
	let l = 0,
		r = route.length - 1;

	while (l <= r) {
		const p = l + ((r - l) >>> 1);
        const mid = route[p];

		if (stop === mid) return true;
		if (stop > mid) l = p + 1;
		else r = p - 1;
	}

	return false;
};

/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function (routes, S, T) {
	if (S === T) return 0;

	const n = routes.length;

	const graph = new Array(n);
	for (let i = 0; i < n; i++) {
		graph[i] = [];
		routes[i].sort((a, b) => a - b);
	}

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (intersect(routes[i], routes[j])) {
				graph[i].push(j);
				graph[j].push(i);
			}
		}
	}

	const queue = [];
	const targets = new Set();
	const visited = new Set();

	for (let i = 0; i < n; i++) {
		if (binarySearch(routes[i], S)) {
			queue.push(i);
			visited.add(i);
		}
		if (binarySearch(routes[i], T)) {
			targets.add(i);
		}
	}

	let distance = 0;
	queue.push(null);

	while (queue.length > 0) {
		const bus = queue.shift();

		if (bus !== null) {
			if (targets.has(bus)) {
				return distance + 1;
			}

			for (const next of graph[bus]) {
				if (!visited.has(next)) {
					visited.add(next);
					queue.push(next);
				}
			}
		} else {
			distance++;
			if (queue.length > 0) {
				queue.push(null);
			}
		}
	}

	return -1;
};