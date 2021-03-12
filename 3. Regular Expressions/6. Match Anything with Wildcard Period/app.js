let exampleStr = "Let's have fun with put regular expressions!";
let unRegex = /fu.|su.|ru.|pu.|nu./gi; // Change this line
console.log(exampleStr.match(unRegex))