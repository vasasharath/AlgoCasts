/*
A group of friends went on holiday and sometimes lent each other money. For example, Alice paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride. We can model each transaction as a tuple (x, y, z) which means person x gave person y $z. Assuming Alice, Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), the transactions can be represented as [[0, 1, 10], [2, 0, 5]].

Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.

Note:

A transaction will be given as a tuple (x, y, z). Note that x ≠ y and z > 0.
Person's IDs may not be linear, e.g. we could have the persons 0, 1, 2 or we could also have the persons 0, 2, 6.
Example 1:

Input:
[[0,1,10], [2,0,5]]

Output:
2

Explanation:
Person #0 gave person #1 $10.
Person #2 gave person #0 $5.

Two transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.
Example 2:

Input:
[[0,1,10], [1,0,1], [1,2,5], [2,0,5]]

Output:
1

Explanation:
Person #0 gave person #1 $10.
Person #1 gave person #0 $1.
Person #1 gave person #2 $5.
Person #2 gave person #0 $5.

Therefore, person #1 only need to give person #0 $4, and all debt is settled.
*/
function Node(number) {
    this.number = number;
    this.net = 0; 
}

var minTransfers = function(transactions) {
    let nodes = {};
    let lowest = [];
	// All im doing here is making a node of each person
    for (let i = 0; i < transactions.length; i++) {
        if (!nodes[transactions[i][0]]) {
            let current = new Node(transactions[i][0]);
            nodes[transactions[i][0]] = current;
        }
        if (!nodes[transactions[i][1]]) {
            let current1 = new Node(transactions[i][1]);
            nodes[transactions[i][1]] = current1;
        }
    }
   // Creating the net amounts for each node
    for (let j = 0; j < transactions.length; j++) {
        nodes[transactions[j][0]].net += transactions[j][2];
        nodes[transactions[j][1]].net -= transactions[j][2];
    }
    // See which starting person to pay back has the lowest transaction amount
    for (let node in nodes) {
        let copy = JSON.parse(JSON.stringify(nodes)); 
        lowest.push(checkItems(copy, nodes[node].number));    
    }
    return Math.min(...lowest);
};

const checkItems = (nodes, num) => {
    let max = num
    let min = findMin(nodes);
    let count = 0;
	// Payout one person at a time until 1 or both people you are comparing has a 0 balance
    while (nodes[max].net !== 0 || nodes[min].net !== 0) {
        let smaller = Math.min(nodes[max].net, -nodes[min].net);
		
        nodes[max].net -= smaller;
        nodes[min].net += smaller;
        count++;
        max = findMax(nodes);
        min = findMin(nodes);
    }
    return count;
}
//Finding Max net value helper 
const findMax = (nodes) => {
    let arr = Object.values(nodes);
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].net > max.net) {
            max = arr[i]
        }
    }
    return max.number;
}
//Finding Min net value helper 
const findMin = (nodes) => {
    let arr = Object.values(nodes);
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].net < min.net) {
            min = arr[i];
        }
    }
    return min.number;
}