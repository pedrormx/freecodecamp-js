/**
 * + - uma ou mais ocorrências
 */

const frase = 'aaabcm  as da sd as d as da sd asds A'
const regex = /a+/g
console.log(frase.match(regex))


let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line //ele busca a sequencia de s
let result = difficultSpelling.match(myRegex);
console.log(result)