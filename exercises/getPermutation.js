/*
The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"
*/
function get_fac(n) {
    let res = [];
    res[0]=1;
    for (let i=1; i<=n; i++) {
        res[i] = res[i-1]*i;
    }
    return res;
}
var getPermutation = function(n, k) {
    let ans = "";
    const vis = [], fac=get_fac(n);
    for (let i=0; i<n; i++) {
        vis[i] = i+1;
    }
    while (vis.length) {
        let res=fac[n-1];
        if (k===res) {
            ans+=vis[0];
            vis.splice(0,1);
        }
       else if (k>res) {
            let cnt = k%res===0?parseInt(k/res)-1:parseInt(k/res);
            k-=cnt * res;
            while (cnt >= vis.length) cnt--;
            ans += vis[cnt];
            vis.splice(cnt,1);
           

        } else {
            ans+=vis[0];
            vis.splice(0,1);
        }
        n--;
    }
    return ans;
};