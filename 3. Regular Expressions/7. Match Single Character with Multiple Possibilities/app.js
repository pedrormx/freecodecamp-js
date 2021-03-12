let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/; 
console.log(bigStr.match(bgRegex)); // Returns ["big"] //verificar se [aiu] estao no meio de b _ g
console.log(bagStr.match(bgRegex)); // Returns ["bag"]
console.log(bugStr.match(bgRegex)); // Returns ["bug"]
console.log(bogStr.match(bgRegex)); // Returns null



let quoteSample =
  "Beware of bugs in the above eio code; In have only proved it correct, not tried it.";
let vowelRegex = /[eiou]/gi; // Change this line
//[eiou]/gi vai buscar dentro de 'quoteSample' os caractereres 'e', 'i', 'o', 'u'

let result = quoteSample.match(vowelRegex); // Change this line

for(let i = 1; i <= result.length; i++){console.log(i)}