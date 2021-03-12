//const é o tipo de 'variavel' que nao pode receber modificaçoes
//let pode receber modificaçoes, porem só é acessivel no seu bloco 


function printManyTimes(str) {

    // Only change code below this line
  
    let SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");