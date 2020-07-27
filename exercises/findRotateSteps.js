/*
In the video game Fallout 4, the quest "Road to Freedom" requires players to reach a metal dial called the "Freedom Trail Ring", and use the dial to spell a specific keyword in order to open the door.

Given a string ring, which represents the code engraved on the outer ring and another string key, which represents the keyword needs to be spelled. You need to find the minimum number of steps in order to spell all the characters in the keyword.

Initially, the first character of the ring is aligned at 12:00 direction. You need to spell all the characters in the string key one by one by rotating the ring clockwise or anticlockwise to make each character of the string key aligned at 12:00 direction and then by pressing the center button.

At the stage of rotating the ring to spell the key character key[i]:

You can rotate the ring clockwise or anticlockwise one place, which counts as 1 step. The final purpose of the rotation is to align one of the string ring's characters at the 12:00 direction, where this character must equal to the character key[i].
If the character key[i] has been aligned at the 12:00 direction, you need to press the center button to spell, which also counts as 1 step. After the pressing, you could begin to spell the next character in the key (next stage), otherwise, you've finished all the spelling.
Example:


 
Input: ring = "godding", key = "gd"
Output: 4
Explanation:
For the first key character 'g', since it is already in place, we just need 1 step to spell this character. 
For the second key character 'd', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".
Also, we need 1 more step for spelling.
So the final output is 4.
Note:

Length of both ring and key will be in range 1 to 100.
There are only lowercase letters in both strings and might be some duplcate characters in both strings.
It's guaranteed that string key could always be spelled by rotating the string ring.
*/
let findRotateSteps = (ring, key) => {

  // We'll be making a memo (named dp) of the following size: 
  //  width = ring.length
  //  height = key.length + 1
  let width = ring.length, height = key.length + 1;

  // We'll initialize every entry in dp with Infinity, except for the [0][0]
  // position, which starts out as 0
  let dp = [];
  for (let i = 0; i < height; i += 1) dp.push(new Array(width).fill(Infinity));
  dp[0][0] = 0;

  // We're looping over this entire memo starting at the second row (r = 1), from
  // top to bottom, left to right. Starting at this second row represents the first 
  // character in the key (named keyChar).
  for (let r = 1; r < height; r +=1) {
    let keyChar = key.charAt(r - 1);

    // Now we check if the ring character (named rChar) is equal to the keyChar. 
    for (let col = 0; col < width; col += 1) {
      let rChar = ring.charAt(col);

      if (keyChar !== rChar) continue;
      // If they aren't equal^^, we continue.


      // Else, if they are equal we need to examine all of the previous rows numbers that
      // are not infinity, calculate the distance to get from there to the current column
      // index where we're at, and do this for all of the previous rows numbers. We'll assign
      // the minimum of these numbers to our dp[r][col]. This will now become the minimum 
      // number of steps needed to get to this specific character in the ring that matches
      // the character in the key.

      // The minArr stores all of the distances from the previous character in the key and ring,
      // to the current character in the key and ring. And we assign, as said previously, the
      // minimum of all of these distances to dp[r][col] below the for-loop.
      let minArr = [];
      for (let prevColIdx = 0; prevColIdx < width; prevColIdx += 1) {
        let val = dp[r - 1][prevColIdx];
        if (val === Infinity) continue;

        minArr.push(val + Math.min(Math.abs(prevColIdx - col), Math.abs(width - Math.abs(prevColIdx - col))));
      }

      // Assigning the minima of all of these distances to dp[r][col]
      dp[r][col] = Math.min(...minArr);
    }
  }

  // Finally, once we exit these loops, we'll take the minimum number out of all of 
  // the numbers in the last row (i.e. row at index height - 1).
  // We add key.length to account for button presses.
  let min = Math.min(...dp[height - 1]);
  min += key.length;

  // We return this minimum.
  return min;
};