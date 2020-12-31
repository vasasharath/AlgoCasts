/*
Strings A and B are K-similar (for some non-negative integer K) if we can swap the positions of two letters in A exactly K times so that the resulting string equals B.

Given two anagrams A and B, return the smallest K for which A and B are K-similar.

Example 1:

Input: A = "ab", B = "ba"
Output: 1
Example 2:

Input: A = "abc", B = "bca"
Output: 2
Example 3:

Input: A = "abac", B = "baca"
Output: 2
Example 4:

Input: A = "aabc", B = "abca"
Output: 2
Note:

1 <= A.length == B.length <= 20
A and B contain only lowercase letters from the set {'a', 'b', 'c', 'd', 'e', 'f'}


*/
var kSimilarity  = module.exports = function(A, B) {
    var a = Array.from(A);
    var b = Array.from(B);
    const N = Infinity;
    
    return dfs(0, a, b);
    
    function dfs(p, a, b)
    {      
        if(p == a.length) return 0;
        
        if(a[p] == b[p]) return dfs(p+1, a, b);
        
        let ans=N;
              
        for(let i=p+1;i<a.length;i++)
            if(a[i]==b[p]) {
                [a[i],a[p]] = [a[p],a[i]]            
                ans=Math.min(ans,dfs(p+1,a,b)+1);            
                [a[i],a[p]] = [a[p],a[i]]            
                if(b[i] == a[p]) break;
            }
        return ans;
    }
};
