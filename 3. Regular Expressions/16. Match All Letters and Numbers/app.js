let longHand = /[A-Za-z0-9_]+/; //vai procurar de "A-Z";a-z; 0-9; _
let shortHand = /\d+/;  
let numbers = "42";
let varNames = "important_var";
/**
 *   //em vez de usar 0-9;
 *   //usamos \d pra detectar qualquer nummero
 *  
 */
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));
console.log(numbers.match(shortHand))