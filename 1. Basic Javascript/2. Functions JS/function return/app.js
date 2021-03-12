function plusThree(num){
    return num + 3
}

var answer = plusThree(2) //5
console.log(answer)



// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum = sum + 5
  
}
// Only change code below this line


// Only change code above this line

addThree();
addFive();



function addInArray(item){
    var arr = [1,2,3,4]
    arr.push(item)
    console.log(arr)
}

addInArray(2)

function nextInLine(arr, item) { //vai receber 2 parametros
    // Only change code below this line
    var arra = arr.push(item); //criar uma variavel chamada "arra", que vai adicionar 5 a arr
  
    var removeItem = arr.shift(); //criar uma variavel com nome removeItem, que vai remover agora o primeiro indice que no caso seria 
  
    return removeItem;  // Change this line
  }
  
  
  nextInLine([1], 5)
  


  var valor = JSON.stringify({})  // '{}' ele converte valores em string
  console.log(typeof valor)
  JSON.stringify({nome: 'idade'})


  