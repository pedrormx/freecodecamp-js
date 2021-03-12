let wrongText = "The sky is silver.";
let silverRegex = /silver/; //pesquisar por silver
console.log(wrongText.replace(silverRegex, "blue")); //substui silver por blue




let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
console.log(result)


let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line