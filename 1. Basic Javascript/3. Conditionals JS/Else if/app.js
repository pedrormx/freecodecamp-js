/**
 * You should only have one if statement in the editor
 * You should use an else statement
 * testElse(4) should return "5 or Smaller"
 * testElse(5) should return "5 or Smaller"
 * testElse(6) should return "Bigger than 5"
 * testElse(10) should return "Bigger than 5".
 * You should not change the code above or below the specified comments
 */


function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if(val < 5){
      return "Smaller than 5";
    }else{
      return "Between 5 and 10";
    }
  
  }
  
  testElseIf(0); //should return smaller than 5
  testElseIf(21); //should return smaller than 10
  