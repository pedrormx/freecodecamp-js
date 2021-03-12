function isEqual(a, b){
    if(a === b){ //should return true, if "A" is equal to "B"
        return true
    }
    else {
        return false
    }
}

console.log(isEqual(2,1))



function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye") // this is, if you to "return" latter, this means that, the function will return that value
}
myFun(console.log(myFun()))



/**
 * Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
    Hint
    Remember that undefined is a keyword, not a string.
 */


 // Setup
function abTest(a, b) {
    // Only change code below this line
    if(a < 0 || b < 0){
      return undefined
    }// Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }

  //Math.round = Round a number to the nearest integer
  //Math.pow = Return the value of the number 4 to the power of 3 (4*4*4): potentiation
  //Math.sqrt(a) = Return the square root of a number:
  //+
  //Math.sqrt(b), 2 Math.sqrt(a + b, 2)

  /*
  Math.pow = 2 * 2 = 4
  Math.sqrt(a+ b = 4)
  Math.pow() 



  */
 
 
  console.log(abTest(3,3)); 

