
 function sendNumber(num){
    if (num > 5) { //si num for maior que 5 e se num for menor que 10, retorna "yes"
        if (num < 10) {
          return "Yes";
        }
      }
      return "No";//se nao, retorna "No"
 }

console.log(sendNumber(10))

function sendNumberOperatorAnd(value){
    if (value > 10 && value < 20){
        console.log(`Number ${value} is bigger than 10 && Is smaller than`)
    }
}
