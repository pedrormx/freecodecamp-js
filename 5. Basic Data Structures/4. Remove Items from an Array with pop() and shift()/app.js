let greetings = ['whats up?', 'hello', 'see ya!'];
greetings.pop() //delete last item in array
let deleteFirstItem = greetings.shift(); //capturar o primeiro valor que foi excluido usando o metodo shift
console.log(deleteFirstItem)


function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped]; // return array with two values
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));