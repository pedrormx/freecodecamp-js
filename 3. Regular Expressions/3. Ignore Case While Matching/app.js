/**
 * Diferenciar letras maiuscula pra minuscula
 * maiúsculas: A , B , C
 * minúsculas: a,  b , c
 * i = Ignorar a caseSensitive
 * g = indicar achar todas as ocorrencias da regex
 * /
 */

let myString = "freeCodeCamp regexasontem";
let fccRegex = /freecodecamp|ontem/gi; //ingorar caseSensitive
let result = fccRegex.test(myString);
console.log(result)