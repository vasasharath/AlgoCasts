/*
There are N workers.  The i-th worker has a quality[i] and a minimum wage expectation wage[i].

Now we want to hire exactly K workers to form a paid group.  When hiring a group of K workers, we must pay them according to the following rules:

Every worker in the paid group should be paid in the ratio of their quality compared to other workers in the paid group.
Every worker in the paid group must be paid at least their minimum wage expectation.
Return the least amount of money needed to form a paid group satisfying the above conditions.

 

Example 1:

Input: quality = [10,20,5], wage = [70,50,30], K = 2
Output: 105.00000
Explanation: We pay 70 to 0-th worker and 35 to 2-th worker.
Example 2:

Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], K = 3
Output: 30.66667
Explanation: We pay 4 to 0-th worker, 13.33333 to 2-th and 3-th workers seperately. 
 

Note:

1 <= K <= N <= 10000, where N = quality.length = wage.length
1 <= quality[i] <= 10000
1 <= wage[i] <= 10000
Answers within 10^-5 of the correct answer will be considered correct.
*/
var mincostToHireWorkers = module.exports = function(quality, wage, K) {
        
        workers = [];
        for (let i = 0; i < wage.length; i++) {           
            workers.push([wage[i],quality[i]]);
        }    
        workers.sort((a,b)=>a[0]*b[1]-a[1]*b[0]);
    
        let ans = 0;
        let vi = [];
        let sum = 0;
        for (let i = 0; i < K; ++i) {
            vi[i] = workers[i][1];
            sum += vi[i];
        }
 
    
        vi.sort((a,b)=>a-b);
        ans = sum * (workers[K - 1][0] * 1.0 / workers[K - 1][1]);
   
        for (let i = K; i < workers.length; ++i) {
            if (workers[i][1] < vi[K - 1]) {
                sum -= vi[K - 1];
                sum += workers[i][1];
                insert(vi, workers[i][1]);
                ans = Math.min(ans, sum * 1.0 * workers[i][0] / workers[i][1]);               
            }          
        }
    
        return ans;
    
    function insert(vi, data) {
        for (let it = 0; it < vi.length; it++) {
            if (data <= vi[it]) {
                vi.splice(it, 0, data);
                break;
            }
        }
        vi.length--;
    };
};