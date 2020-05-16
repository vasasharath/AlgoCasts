/*
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
Note:

S will consist of lowercase letters and have length in range [1, 500].
*/
var reorganizeString = function(S) {
    if (S.length === 1){
        return S;
    }
    let charMap = {};
    
    for (let i = 0; i < S.length; i++){
        if (charMap[S.charAt(i)] ){
            charMap[S.charAt(i)]++;
        } else {
            charMap[S.charAt(i)] = 1;
        }
    }
    let returnString = "";
    
    const getHighestKeyThatIsntLast = (lastKey) => {
        let highest = null;
        Object.keys(charMap).forEach(k=>{
            if (k!==lastKey && (charMap[k] > charMap[highest] || highest === null)){
                highest = k;
            }
        });
        if (highest === null){
            return lastKey;
        }
        return highest;
    }
    
    let lastKey = null;
    while(returnString.length !== S.length){
        let k = getHighestKeyThatIsntLast(lastKey);
        if (k === lastKey){
            return "";
        }
        charMap[k]--;
        if (charMap[k] < 0){
            return "";
        }
        returnString += k;
        lastKey = k;
    }
    
 
    
    return returnString;
};