
/**
 * 
 * Golf Code
 * 
 * In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball
 * in a hole to complete the play.
 * Depending on how far above or below par your strokes are, there is a different nickname.
 * Your function will be passed par and strokes arguments.
 * Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

 */

 /**
  * golfScore(4, 1) should return "Hole-in-one!"
  * golfScore(4, 2) should return "Eagle"
  * golfScore(5, 2) should return "Eagle"
  * golfScore(4, 3) should return "Birdie"
  * golfScore(4, 4) should return "Par"
  * golfScore(1, 1) should return "Hole-in-one!"
  * golfScore(5, 5) should return "Par"
  * golfScore(4, 5) should return "Bogey"
  * golfScore(4, 6) should return "Double Bogey"
  * golfScore(4, 7) should return "Go Home!"
  * golfScore(5, 9) should return "Go Home!"
  */



 var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
 function golfScore(par, strokes) {
    // Only change code below this line
    return (strokes === 1) ? names[0] ? ((strokes - par) <= -2 ) : names[1]
    ? ((strokes - par) === -1) : names[2] ? (strokes === par) : names[3]
    ? ((strokes - par) === 1) : names[4] ? ((strokes - par) === 2) : names[5]
    : names[6]
  }
  
  // Change these values to test
console.log(golfScore(5, 4))