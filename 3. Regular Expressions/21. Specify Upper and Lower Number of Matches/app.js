
let threeAs = "a2";
let fourAs = "aaaa";
let sevenAs = "aaaaaaa";

let myRegex = /a{1,3}/; //vai verificar se existe mais de 2 ate 4 ou mais numeros
console.log(myRegex.test(threeAs)); // true
console.log(myRegex.test(fourAs)); // true
console.log(myRegex.test(sevenAs)); // truex

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);