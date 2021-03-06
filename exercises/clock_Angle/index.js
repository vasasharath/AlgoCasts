/*
find angle between hands of an analog clock at a given time.
*/
function findAngle(h,m){
        // validate the input
        if (h < 0 || m < 0 || 
            h > 12 || m > 60)
            console.log("Wrong input");
 
        if (h == 12)
            h = 0;
             
        if (m == 60) 
            m = 0;
 
        // Calculate the angles moved by hour and
        // minute hands with reference to 12:00
        let hour_angle = (0.5 * (h * 60 + m));
        let minute_angle = (6 * m);
 
        // Find the difference between two angles
        let angle = Math.abs(hour_angle - minute_angle);
 
        // smaller angle of two possible angles
        angle = Math.min(360 - angle, angle);
 
        return angle;
}
console.log(findAngle(3,30));
console.log(findAngle(9,60));