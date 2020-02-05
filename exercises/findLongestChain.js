var findLongestChain = function(pairs) {    
    pairs.sort((a,b)=>a[1]-b[1]);    
    let res=1,prev=0;
    for(let cur=1;cur<pairs.length;cur++){
        if(pairs[cur][0]>pairs[prev][1]){
            prev=cur;
            res++;
        }                
    }
        
    return res;
};