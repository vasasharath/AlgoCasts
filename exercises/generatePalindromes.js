/*
Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.

Example 1:

Input: "aabb"
Output: ["abba", "baab"]
Example 2:

Input: "abc"
Output: []
*/
var generatePalindromes = function(s) {
    //count char
    let map = new Map()
    for (let char of s) {
        let currentCount = map.get(char) == undefined ? 0 : map.get(char)
        map.set(char,currentCount+1)
    }
    
    //get the midpoint character
    let midpoint = "",permutationArr = []
    for (let key of map.keys()){
        let curCount = map.get(key)
        while (curCount >= 2){
            permutationArr.push(key)
            curCount -= 2
        }
        if (curCount==1) {
            if (midpoint!=""){
                return []
            }
            midpoint = key
        }
    }
    
    let ret = [],len = permutationArr.length
    permutationArr.sort((a,b)=>{return a-b})
    //helper function for backtracking
    const helper = (used, pos, cur) =>{
        if (pos == len) {
            ret.push(cur.slice())
            return
        }
        for (let i = 0;i<len;i++){
            if (used[i]) {
                continue
            }
            if(i>0 &&permutationArr[i-1]==permutationArr[i] && !used[i-1]) {
                continue
            }
            used[i] = true
            cur.push(permutationArr[i])

            helper(used, pos+1,cur)

            cur.pop()
            used[i] = false
        }
        return
    }
    //remaining char used for permutation
    
    helper([], 0, [])
    let result = []
    //reverse and add to res
    for (let el of ret){
        let cur = el.join("")
        let rev = el.slice().reverse().join("")
        result.push(cur+midpoint+rev)
    }
    return result
};