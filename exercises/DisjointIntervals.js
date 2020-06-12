/*
Given a data stream input of non-negative integers a1, a2, ..., an, ..., summarize the numbers seen so far as a list of disjoint intervals.

For example, suppose the integers from the data stream are 1, 3, 7, 2, 6, ..., then the summary will be:

[1, 1]
[1, 1], [3, 3]
[1, 1], [3, 3], [7, 7]
[1, 3], [7, 7]
[1, 3], [6, 7]
 

Follow up:

What if there are lots of merges and the number of disjoint intervals are small compared to the data stream's size?
*/
var SummaryRanges = function() {
  this.intervals = [];
};
SummaryRanges.prototype.addNum = function(val) {
	if(!this.intervals.length) this.intervals.push([val, val]);
  let l = 0;
	let r = this.intervals.length - 1;

	while(l < r) {
		let m = Math.floor((l + r) / 2);
		if(this.intervals[m][0] <= val && val <= this.intervals[m][1]) {
			return;
		} else if(this.intervals[m][0] > val) {
			r = m;
		} else {
			l = m + 1;
		}
	}

	if(this.intervals[l][0] > val) {
		this.intervals.splice(l, 0, [val, val]);
	} else if(this.intervals[l][1] < val) {
    this.intervals.splice(l + 1, 0, [val, val]);
		l++;
	}

	if((l + 1) < this.intervals.length && (val + 1) == this.intervals[l + 1][0]) {
		this.intervals.splice(l, 1);
		this.intervals[l][0] = val;
	}
	if((l - 1) >= 0 && (val - 1) == this.intervals[l - 1][1]) {
		this.intervals[l - 1][1] = this.intervals[l][1];
		this.intervals.splice(l, 1);
	}
};
SummaryRanges.prototype.getIntervals = function() {
  return this.intervals;
};