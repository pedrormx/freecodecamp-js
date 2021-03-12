function test (myCondition) {
    if (myCondition) { //se o que for passado em test, for algo verdadeiro, por exemplo um booleano "true"
       return "It was true";//vai executar It was true
    }
    return "It was false";
  }

console.log(test(true));  // returns "It was true"
console.log(test(false)); // returns "It was false




// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(12);
  testEqual(10);



//typeof 

/**
 * 1 !=  2     // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
 */

 //podemos usar 1 em vez de true e vice virsa

 if(0){
     console.log(1)
 }else{console.log(0)}



/**
 * 3 !== '3' //true
 * 3 !== 3 //false
 */

