/**
 * You can apply the regex /t[a-z]*i/ to the string "titanic".
 * This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
 */ 
const filme = "titanic"
const regex = /t[a-z]*i/ //procura do t ate o i; no meio deles: temos o "a ate o z"; o "*" vai terminar as palavras, e depois procurar o "I"
console.log(filme.match(regex))



const regex1 = /t[a-z]*?i/
console.log(filme.match(regex1))


let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // it's the answer! //. = é qualquer caracter
/**
 * procura o que começa com '<'
 * depois
 * procura alguma coisa dentro de '< aqui dentro com .*? >'
 */
let result = text.match(myRegex);
console.log(result)


const text1 = 'Paralelepipedo'
const regex2 = /e.*?pipe/
console.log(text1.match(regex2))