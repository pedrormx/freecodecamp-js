function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 'a':
            answer = "apple"
            break;
        case 'b':
            answer = "bird"
            break;
        case 'c':
            answer = "cat"
            break;
         case 'd':
            answer = "stuff"
            break
        default:
            answer = 'stuff'
    }
  
    // Only change code above this line
    return answer;
  }
  
  console.log(switchOfStuff(4))





  function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch(val) {
        case 1 : //entre 1 e 3 vao receber a mensagem '1, 2, or 3'
        case 2:
        case 3:
            answer = "1, 2, or 3";
          break;
        case 4:
            answer = "4 alone";
      }
    // Only change code above this line
    return answer;
  }
  
console.log(sequentialSizes(3));



/**
 * 
 * Write a switch statement to set answer for the following ranges:
    1-3 - "Low"
    4-6 - "Mid"
    7-9 - "High"
Note
You will need to have a case statement for each number in the range. 
 */

function sequentialSizes(value){
    var answer = ""
    switch (value) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6: 
            answer = "Mid"
            break;
        case 7:
        case 8: 
        case 9:
            answer = "High"
            break;
    }
    return answer
}
console.log(sequentialSizes(4))





function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
  
    switch(val){
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer"
        break;
      case 1:
        answer = "There is no #1"
        break;
      case 99:
        answer = "Missed me by this much"
        break;
      case 7:
        answer = "Ate Nine"
        break;
      case "Jonh":
        answer = ""
        break;
      case 156:
        answer = ""
        break;
    }
    // Only change code above this line
    return answer;
  }
  
console.log(chainToSwitch(7));