const cep = '12345-678'
const regex = /[^-]/gi
// ^ = excluir oo que vier apos
// ^- = excluir todos os caracteres "-"
console.log(cep.match(regex))


let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result)