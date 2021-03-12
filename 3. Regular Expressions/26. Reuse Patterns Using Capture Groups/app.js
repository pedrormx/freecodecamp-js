let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex));


let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
    