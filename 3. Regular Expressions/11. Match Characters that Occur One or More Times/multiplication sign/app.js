let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; 
/**
 * * = vai pegar todos os valores que forem selecionados
 * go = gooal; vai retorna goo
 */
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));






// Only change code below this line
let chewieQuote = "Aaaaaaaaaaaaaaaa"
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
console.log(result)