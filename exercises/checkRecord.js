/*
Given a positive integer n, return the number of all possible attendance records with length n, which will be regarded as rewardable. The answer may be very large, return it after mod 109 + 7.

A student attendance record is a string that only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A record is regarded as rewardable if it doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

Example 1:
Input: n = 2
Output: 8 
Explanation:
There are 8 records with length 2 will be regarded as rewardable:
"PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" won't be regarded as rewardable owing to more than one absent times. 
Note: The value of n won't exceed 100,000.
*/
var checkRecord = function(n) {
    let p=1, pl=pll=a=al=all=0; // p=1 because when n=0, '' is considered rewardable
    let mod=1e9+7;
    while(n--){
        let prev=[p,pl,pll,a,al,all];
        p=(prev[0]+prev[1]+prev[2])%mod;
        //=p+l+ll, p...p p | ...l p | ...ll p
        pl=prev[0];
        //=p,      p...p l
        pll=prev[1];
        //+=l,     p...l l
        a=(prev[0]+prev[1]+prev[2]+prev[3]+prev[4]+prev[5])%mod;
        //=prev[]  p...p a | ...l a | ...ll a | ...a... p | ...a...l p | ...a...ll p
        al=prev[3]%mod;
        //=a,      ...a... l
        all=prev[4]%mod;
        //+=al,    ...a...l l
    }
    return (p+pl+pll+a+al+all)%mod;
};