/**
 * Dica: Se uma string vazia ("") for usada como separador, a string será dividida entre cada caractere.
 */
function reverseString(str) {
    return str
    .split("")
    .reverse()//reverse vai reenverter um array
    .join(""); //converte array em string, pra cada caracter sem espaço
  }
console.log(reverseString("pedro"))


