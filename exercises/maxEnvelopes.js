/*
You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Note:
Rotation is not allowed.

Example:

Input: [[5,4],[6,4],[6,7],[2,3]]
Output: 3 
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
*/
var maxEnvelopes = function(envelopes) {
    
    envelopes.sort((a,b) => {
        if(a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0]-b[0];
    });
    
    const tails = [];

    for(let i = 0; i < envelopes.length; i++) {
        
        const [w,h] = envelopes[i];
        
        if(h < tails[0]) {
            tails[0] = h;
        } else if (!tails.length || h > tails[tails.length-1]) {
            tails.push(h);
        } else {
            // find insertion index 
            let l = 0;
            let r = tails.length-1;
            while(l < r) {
                
                let mid = (l+r)/2 >> 0;
                if(tails[mid] >= h) {
                    r = mid;
                } else {
                    l = mid+1;
                }
                
            }
            tails[r] = h;
        }
        
    }
    
    return tails.length;
    
};