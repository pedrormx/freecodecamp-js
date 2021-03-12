function sendNumberOperatorOr(value){
    if(value >= 10 || value >= 20){
        console.log(`YES`)
    }else{
        console.log('NO')
    }
}

sendNumberOperatorOr(2)



function testLogicalOr(val) {
    // Only change code below this line
  
    if (val >= 21 && val <= 25 || val <= 9) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  console.log(testLogicalOr(15))



