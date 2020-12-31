/* 
In an exam room, there are N seats in a single row, numbered 0, 1, 2, ..., N-1.

When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.  If there are multiple such seats, they sit in the seat with the lowest number.  (Also, if no one is in the room, then the student sits at seat number 0.)

Return a class ExamRoom(int N) that exposes two functions: ExamRoom.seat() returning an int representing what seat the student sat in, and ExamRoom.leave(int p) representing that the student in seat number p now leaves the room.  It is guaranteed that any calls to ExamRoom.leave(p) have a student sitting in seat p.

 

Example 1:

Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
Output: [null,0,9,4,2,null,5]
Explanation:
ExamRoom(10) -> null
seat() -> 0, no one is in the room, then the student sits at seat number 0.
seat() -> 9, the student sits at the last seat number 9.
seat() -> 4, the student sits at the last seat number 4.
seat() -> 2, the student sits at the last seat number 2.
leave(4) -> null
seat() -> 5, the student sits at the last seat number 5.
​​​​​​​

Note:

1 <= N <= 10^9
ExamRoom.seat() and ExamRoom.leave() will be called at most 10^4 times across all test cases.
Calls to ExamRoom.leave(p) are guaranteed to have a student currently sitting in seat number p.
*/
var ExamRoom = function(N) {
    this.len=N;//For Length
    this.seats=new Array();//For Storing Used Seats (Sorted)
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function() {
        
        /*If all seats empty*/
        if(this.seats.length<=0){
            this.seats.push(0);
            return 0;
        }

        let mx=-1;//for max diff
        let res=-1;//for seat-index
        
        /*
        Compare every 2 closest pairs of seats array
        */
        for(let i=0;i<this.seats.length-1;i++){
            let avg=Math.floor((this.seats[i]+this.seats[i+1])/2);
            let diff=avg-this.seats[i];
            if(diff>mx){
                mx=diff;
                res=avg;
            }
        }
        
        /*Left Boundary*/
        if(this.seats[0]>=mx){
            mx=this.seats[0];
            res=0;
        }
        /*Right Boundary*/
        if((this.len-1)-this.seats[this.seats.length-1]>mx){
            mx=(this.len-1)-this.seats[this.seats.length-1];
            res=(this.len-1);
        }
    
        /*Insert at appropriate index to maintain sorted order*/
        let flag=0;
        for(let i=0;i<this.seats.length;i++){
            if(this.seats[i]>res){
                this.seats.splice(i,0,res);
                flag=1;
                break;
            }
        }
        if(!flag)
            this.seats.push(res);
    
        /*Return result*/
        return res;
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function(p) {
    let ind=this.seats.indexOf(p);
    this.seats.splice(ind,1);
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */