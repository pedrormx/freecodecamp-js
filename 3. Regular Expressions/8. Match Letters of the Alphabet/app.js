let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/; 
// "-" = até
//[a ate e] = [a-e]

console.log(catStr.match(bgRegex)); // Returns ["cat"]  //buscar do 'a' ate o 'e' e juntar com at
console.log(batStr.match(bgRegex)); // Returns ["bat"]
console.log(matStr.match(bgRegex)); // Returns null

let quoteSample = "squickd brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

let total = 1
for(total; total <= result.length; total++){

}
console.log(total)

