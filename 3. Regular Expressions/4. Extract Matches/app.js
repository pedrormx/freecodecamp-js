/**
 * So far, you have only been checking
 * if a pattern exists or not within a string.
 * You can also extract the actual matches you found with the .match() method.
 */

// Returns ["Hello"]
let ourStr = "Regular Expressions";
let ourRegex = /expressions/i;
let resultRegEx = ourStr.match(ourRegex)[0];
// Returns ["expressions"]
console.log(resultRegEx)

console.log('string'.match(/string/))



let extractStr = "Extract the word 'coding' from this  string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line