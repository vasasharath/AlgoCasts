/*
We are stacking blocks to form a pyramid. Each block has a color which is a one letter string.

We are allowed to place any color block C on top of two adjacent blocks of colors A and B, if and only if ABC is an allowed triple.

We start with a bottom row of bottom, represented as a single string. We also start with a list of allowed triples allowed. Each allowed triple is represented as a string of length 3.

Return true if we can build the pyramid all the way to the top, otherwise false.

Example 1:

Input: bottom = "BCD", allowed = ["BCG", "CDE", "GEA", "FFF"]
Output: true
Explanation:
We can stack the pyramid like this:
    A
   / \
  G   E
 / \ / \
B   C   D

We are allowed to place G on top of B and C because BCG is an allowed triple.  Similarly, we can place E on top of C and D, then A on top of G and E.
 

Example 2:

Input: bottom = "AABA", allowed = ["AAA", "AAB", "ABA", "ABB", "BAC"]
Output: false
Explanation:
We can't stack the pyramid to the top.
Note that there could be allowed triples (A, B, C) and (A, B, D) with C != D.
 

Constraints:

bottom will be a string with length in range [2, 8].
allowed will have length in range [0, 200].
Letters in all strings will be chosen from the set {'A', 'B', 'C', 'D', 'E', 'F', 'G'}.
*/
var pyramidTransition = function(bottom, allowed) {
    
    /*Initialise map of 'children':[parent1,parent2,...]*/
    let map=new Map();
    allowed.map((item)=>{
       let t=map.get(item[0]+item[1])||new Array();
        t.push(item[2]);
        map.set(item[0]+item[1],t);
    });    
    
    /*For Caching*/
    let memo=new Map();
    
    let solve = function(cur,ind,next){
        /* if this level is already examined*/
        if(memo.has(cur))
            return memo.get(cur);
        
        /* if this level is top*/
        if(cur.length==1)
            return true;
        
        /* if we are at last character of this level*/
        if(ind>=cur.length-1){
            let res=solve(next,0,''); //Solve the upper level
            memo.set(next,res);      //Cache the result
            return res;             //return
        }
        
        /* if the current 2 characters do not have a parent */
        if(!map.has(cur.substring(ind,ind+2))){
            memo.set(cur,false);
            return false;
        }
        
        /*Loop over all parents of current 2 characters*/
        for(let char of map.get(cur.substring(ind,ind+2))){
            if(solve(cur,ind+1,next+char))
                return true;
        }
        return false;
    }
    return solve(bottom,0,'');
};